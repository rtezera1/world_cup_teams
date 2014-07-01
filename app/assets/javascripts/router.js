// For more information see: http://emberjs.com/guides/routing/


App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  this.resource('teams', { path: '/'}, function() {
    this.resource('team', { path: '/teams/:id'});
  });
});

