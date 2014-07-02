App.TeamEditRoute = Ember.Route.extend({
  activate: function() { this.controllerFor('team').set('isEditing', true)},
  deactivate: function() { this.controllerFor('team').set('isEditing', false) }
});
