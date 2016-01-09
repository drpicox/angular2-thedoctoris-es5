'use strict';

var ngCore = require('angular2/core');

var Booth = require('./Booth');

module.exports = ngCore.Component({
	selector: 'tdi-the-doctor-is',
	template: '<p>The doctor is [{{is}}]</p>',
	providers: [],
}).Class({
	constructor: [ 
			Booth, function (
			booth  ) {
		this.is = 'out';
		booth.call().then(function (is) {
			this.is = is;
		}.bind(this));		
	}],
});