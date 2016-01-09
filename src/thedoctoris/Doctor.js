'use strict';

var ngCore = require('angular2/core');

module.exports = ngCore.Class({
	constructor: 
			[ function
			( ) {
	}],
	come: function() {
		return new Promise(function(resolve) {
		  setTimeout(function() {
			resolve('here');
		  }, 3000);
		});
	},
});
