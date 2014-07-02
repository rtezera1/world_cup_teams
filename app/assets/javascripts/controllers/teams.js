App.TeamsController = Ember.ArrayController.extend({
  sortProperties: ['country', 'continent'],

  teams: function() {
    return this.get('search') ? this.get('searchedTeams') : this

  }.property('search', 'searchedTeams'),

  searchedTeams: function() {
    var search = this.get('search').toLowerCase()
    return this.filter(function(team) {
      return team.get('country').toLowerCase().indexOf(search) != -1
    })
  }.property('search', 'this.@each.countryContinent')

});
