#!/bin/bash

# Configuration
STRAPI_URL="https://hopeful-creativity-5e88e07756.strapiapp.com/api/service-collections"
BEARER_TOKEN="ca1c770fddb71eac1f3877cb6177b88756a0109f360c21eddda0124c756fb88a500925053bcc707c5693e65fa5acbbc81295341591599c5cbc4d202936e2e1a3f4d7fb967139fa5e42ad13a4200a4f0b136a03bb3584186385c75f1ba086b98376b99191a7cca09760c24e323b5627337157fe0770bf7707b920681b6f244c5f"
JSON_FILE="services.json"

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed. Please install jq first."
    echo "Ubuntu/Debian: sudo apt install jq"
    echo "macOS: brew install jq"
    exit 1
fi

# Check if the JSON file exists
if [ ! -f "$JSON_FILE" ]; then
    echo "Error: $JSON_FILE not found!"
    exit 1
fi

# Get the total number of items
total_items=$(jq 'length' "$JSON_FILE")
echo "Found $total_items items to upload"

# Counter for successful uploads
success_count=0
failed_count=0

# Loop through each item in the JSON array
for i in $(seq 0 $((total_items - 1))); do
    echo "Processing item $((i + 1))/$total_items..."
    
    # Extract the current item's data
    item_data=$(jq ".[$i]" "$JSON_FILE")
    
    # Get the title for logging
    title=$(echo "$item_data" | jq -r '.data.title')
    echo "Uploading: $title"
    
    # Send POST request
    response=$(curl -s -w "\n%{http_code}" -X POST "$STRAPI_URL" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $BEARER_TOKEN" \
        -d "$item_data")
    
    # Extract HTTP status code (last line)
    http_code=$(echo "$response" | tail -n1)
    response_body=$(echo "$response" | head -n -1)
    
    # Check if successful (2xx status codes)
    if [[ $http_code -ge 200 && $http_code -lt 300 ]]; then
        echo "✓ Successfully uploaded: $title (HTTP $http_code)"
        ((success_count++))
    else
        echo "✗ Failed to upload: $title (HTTP $http_code)"
        echo "Response: $response_body"
        ((failed_count++))
    fi
    
    # Add a small delay to avoid rate limiting
    sleep 0.5
    echo "---"
done

echo "Upload complete!"
echo "Successful uploads: $success_count"
echo "Failed uploads: $failed_count"
echo "Total processed: $total_items"