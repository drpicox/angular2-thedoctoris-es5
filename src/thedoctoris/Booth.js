'use strict';

var ngCore = require('angular2/core');

var Doctor = require('./Doctor.js');

module.exports = ngCore.Class({
	constructor: 
			[Doctor, function
			(doctor) {
		this.doctor = doctor;
	}],
	come: function() {
		return this.doctor.come().then(function() {
		  return 'in';
		});
	},
});