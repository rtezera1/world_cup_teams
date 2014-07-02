App.Team = DS.Model.extend({

  country: DS.attr('string'),

  continent: DS.attr('string'),

  qualified: DS.attr('string'),

  comment: DS.attr('string'),

  countryContinent: function()  {
    return this.get('country') + ', ' + this.get('continent')
  }.property('country', 'continent')


});

App.Team.reopenClass({
  QUALIFIED: [ 'Yes','No']
});
