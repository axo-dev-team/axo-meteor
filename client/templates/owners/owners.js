Template.owners.helpers({
    owners: function () {
        return Owners.find();
    }
});

Template.addOwner.events({
    'submit form': function (event, template) {
        event.preventDefault();
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var address = event.target.address.value;
        var city = event.target.city.value;
        var telephone = event.target.telephone.value;
        console.log('firstName'+ firstName);
        Owners.insert({
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            telephone: telephone
        });
        Router.go('owners');
    }
});