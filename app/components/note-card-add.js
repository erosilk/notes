import Ember from 'ember';


export default Ember.Component.extend({
    actions: {
        newNote() {
            this.set('isEdit', true);
        },
        isSaved() {
            this.set('isEdit', false);
        }
        
    }
});
