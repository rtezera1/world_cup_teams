App.TeamController = Ember.ObjectController.extend({

  isEditing: false,

  actions: {
    completed: function() {
      this.get('model').save();
    },

    delete: function() {
      var self = this;
      this.get('model').destroyRecord().then(function() {
        self.transitionToRoute('teams');
      });
    }
  }

});
