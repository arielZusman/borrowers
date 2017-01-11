import DS from 'ember-data';

export default DS.Model.extend({
  notes: DS.attr('string', {defaultValue: ''}),
  returned: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  friend: DS.belongsTo('friend'),
  article: DS.belongsTo('article')
});
