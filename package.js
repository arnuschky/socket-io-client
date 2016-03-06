Package.describe({
  name: 'arnuschky:socket-io-client',
  summary: 'A Meteor package wrapper for the official socket.io-client',
  version: '0.1.4',
  git: 'https://github.com/arnuschky/socket-io-client'
});

Npm.depends({
  'socket.io-client': '0.9.16'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.0');
  api.addFiles(['socket-io-client.js'], 'server');
  if (api.export) {
    api.export('io');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('arnuschky:socket-io-client');
  api.addFiles('socket-io-client-tests.js');
});
