export default {
  "kind": "collectionType",
  "collectionName": "event_categories",
  "info": {
    "singularName": "event-category",
    "pluralName": "event-categories",
    "displayName": "Event Category"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "content-manager": {
      visible: true
    },
    "content-type-builder": {
      visible: true
    }
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "unique": true
    },
    "icon": {
      "type": "media",
      "multiple": false,
      "required": true,
      "allowedTypes": [
        "images"
      ]
    }
  }
};