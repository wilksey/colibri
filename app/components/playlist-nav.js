import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',

  store: Ember.inject.service(),

  getPlaylists: function() {
    let playlists = this.get('store').findAll('playlist');
    this.set('playlists', playlists);
  }.on('init'),

  actions: {
    create: function() {
      let store = this.get('store');
      let playlist = store.createRecord('playlist', {
        title: 'Rails is Omakase'
      });
      playlist.save();
    },
    addTrack: function(obj, opts) {
      let playlist = opts.target.playlist;
      let track = obj;  // might be album in the future
      playlist.get('tracks').pushObject(track);
      playlist.save();
    }
  }
});
