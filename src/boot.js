'use strict';

var bootstrap = require('angular2/platform/browser').bootstrap;

var TheDoctorIsComponent = require('./thedoctoris').TheDoctorIsComponent;
var THEDOCTORIS_PROVIDERS = require('./thedoctoris').THEDOCTORIS_PROVIDERS;

module.exports = boot;

function boot() {
	bootstrap(TheDoctorIsComponent,[THEDOCTORIS_PROVIDERS]);
}