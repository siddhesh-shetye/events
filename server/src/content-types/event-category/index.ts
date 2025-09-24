export default {
    "kind": "collectionType",
    "collectionName": "event-categories",
    "info": {
        "singularName": "event-category",
        "pluralName": "event-categories",
        "displayName": "Event Category",
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
    }
};