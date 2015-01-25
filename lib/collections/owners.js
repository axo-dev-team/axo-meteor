Owners = new Mongo.Collection("owners");
Owners.allow({
    insert: function (userId, doc) {
        // the user must be logged in
        return  userId!==null;
    },
    update: function (userId, doc, fields, modifier) {
        // the user must be logged in
        return  userId!==null;

    },
    remove: function (userId, doc) {
        // the user must be logged in
        return  userId!==null;
    }
});