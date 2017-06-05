import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var store = this.get('store');
        if (window.localStorage.getItem('notes') === null) {
            store.createRecord('note', {
            title: 'Rails is Omakase',
            content: 'Lorem ipsum'
            });        
        }
    },
    setupController: function (controller, model) {
        controller.set('model', model);
    }

});
