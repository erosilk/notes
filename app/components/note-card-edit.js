import Ember from 'ember';
import { storageFor } from 'ember-local-storage';


export default Ember.Component.extend({
    notes: storageFor('notes'),

    actions: {
        saveNote(title, content) {
            this.get('notes').addObject({title:title,content:content});
            this.get('saved')();
        }
    }
});
