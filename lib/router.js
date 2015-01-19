Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        //return [Meteor.subscribe('notifications')]
    },
    onAfterAction: function() {
        $(document).scrollTop(0);
    }
});

Router.route('/owners', {name: 'owners',parent:'home', title : 'Owners'});
Router.route('/veterinarians', {name: 'veterinarians', parent:'home', title : 'Veterinarians'});
Router.route('/', {name: 'home', title : 'Home'});

var requireLogin = function () {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};
Router.onBeforeAction(requireLogin, {only: 'owners'});