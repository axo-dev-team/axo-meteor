Meteor.publish('owners', function() {
    return Owners.find();
});
