App.TeamController = Ember.ObjectController.extend({
  actions: {
    update: function() {
      this.get('model').save();
    }
  }

});
