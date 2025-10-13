/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Workshop/zfleet_workshop/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});