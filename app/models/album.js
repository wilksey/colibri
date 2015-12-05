import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.belongsTo('artist'),
  tracks: DS.hasMany('track')
});
