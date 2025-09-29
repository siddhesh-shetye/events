export default {
  "kind": "collectionType",
  "collectionName": "event_registrations",
  "info": {
    "singularName": "event-registration",
    "pluralName": "event-registrations",
    "displayName": "Event Registration"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "event": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "api::event.event"
    },
    "user": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "plugin::users-permissions.user"
    },
    "status_code": {
      "type": "enumeration",
      "required": true,
      "default": "pending",
      "enum": [
        "pending",
        "approved",
        "rejected"
      ]
    }
  }
};