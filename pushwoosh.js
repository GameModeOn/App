function initPushwoosh() {
	var pushNotification = window.plugins.pushNotification;
	
	//initialize Pushwoosh with projectid: GOOGLE_PROJECT_ID, appid : PUSHWOOSH_APP_ID. This will trigger all pending push notifications on start.
	pushNotification.onDeviceReady({ projectid: '17831485163', appid : '1D863-3883F' });
	
	//register for pushes
	pushNotification.registerDevice(
		function(status) {
			var pushToken = status;
		},
		function(status) {
		}
	);
}
