App.TeamsNewController = Ember.Controller.extend({


  actions: {

    makeThatTeamBro: function() {

      var self = this;
      var fields = this.get('fields')

      if (App.Team.valid(fields)) {
        var team = this.store.createRecord('team', fields)
        team.save().then(function(team) {
        self.transitionToRoute('team', team);
      });
    } else {
      this.set('showError', true)
    }
   }
  }
});
