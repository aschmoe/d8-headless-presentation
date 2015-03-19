// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  greeny = require('bespoke-theme-greeny'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash');

// Bespoke.js
bespoke.from('article', [
  greeny.theme(),
  greeny.scale(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  hash()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
require('prism/components/prism-apacheconf.min.js');

