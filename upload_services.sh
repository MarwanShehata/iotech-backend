#!/bin/bash

# Configuration
STRAPI_URL="https://hopeful-creativity-5e88e07756.strapiapp.com/api/service-collections"
BEARER_TOKEN="df5e0baad6a302093ffb1c1cd55a05cea07919d0006b4f9f1b385dd741ec066e00899bcddad303ea255a08b4b9772a3873ed03817563006ad22b9aea0942c21c6c69caff8211565a5277ddad7e5044e3c7d6be56dd0788aab1a2dd9892a27a8ac9d6e4f609c5062f256545aec54a7c591dc4189949a8a379deeadf7a028cdbf1"
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