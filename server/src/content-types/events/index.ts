export default {
    "kind": "collectionType",
    "collectionName": "insights",
    "info": {
        "singularName": "insight",
        "pluralName": "insights",
        "displayName": "Insights",
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
        "enable_review": {
            "type": "boolean",
            "default": false
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
        "enable_registration": {
            "type": "boolean",
            "default": false
        }
    }
};