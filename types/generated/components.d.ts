import type { Schema, Struct } from '@strapi/strapi';

export interface ServicesServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_services_service_sections';
  info: {
    displayName: 'serviceSection';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'services.service-section': ServicesServiceSection;
    }
  }
}
