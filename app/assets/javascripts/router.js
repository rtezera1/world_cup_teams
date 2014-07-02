// For more information see: http://emberjs.com/guides/routing/


App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  this.resource('teams', { path: '/' }, function() {
    this.route('new');
    this.resource('team', { path: '/teams/:id' }, function() {
      this.route('edit');
    })
  })
});
