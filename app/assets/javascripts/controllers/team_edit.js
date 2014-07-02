App.TeamEditController = Ember.ObjectController.extend({
  actions: {
    edit: function() {
      var self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('team');
      })

    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('team');
    }
  }
});
