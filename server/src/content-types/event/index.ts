export default {
    "kind": "collectionType",
    "collectionName": "events",
    "info": {
        "singularName": "event",
        "pluralName": "events",
        "displayName": "Events",
        "description": ""
    },
    "options": {
        "draftAndPublish": false
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
            "required": false
        },
        "description": {
            "type": "text",
            "required": false
        },
        "start_at": {
            "type": "datetime"
        },
        "end_at": {
            "type": "datetime"
        },
        "thumbnail": {
            "type": "media",
            "multiple": false,
            "required": false,
            "allowedTypes": [
                "images"
            ]
        },
        "gallery": {
            "type": "media",
            "multiple": true,
            "required": false,
            "allowedTypes": [
                "images"
            ]
        },
        "featured": {
            "type": "boolean",
            "default": false
        },
        "enable_review": {
            "type": "boolean",
            "default": false
        },
        "enable_registration": {
            "type": "boolean",
            "default": false
        },
        "button": {
            "type": "component",
            "repeatable": false,
            "component": "events.button"
        },
        "location": {
            "type": "string"
        },
        "latitude": {
            "type": "string"
        },
        "longitude": {
            "type": "string"
        },
        "capacity": {
            "type": "integer"
        },
    }
};