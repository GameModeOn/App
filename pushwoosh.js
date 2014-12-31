function initPushwoosh() {
	var pushNotification = window.plugins.pushNotification;
	
	//set push notifications handler
	document.addEventListener('push-notification', function(event) {
		var title = event.notification.title;
		var userData = event.notification.userdata;
		
		if(typeof(userData) != undefined) {
			console.warn('user data: ' + JSON.stringify(userData));
		}
		
		alert(title);
	});
	
	//initialize Pushwoosh with projectid: GOOGLE_PROJECT_ID, appid : PUSHWOOSH_APP_ID. This will trigger all pending push notifications on start.
	pushNotification.onDeviceReady({ projectid: '17831485163', appid : '1D863-3883F' });
	
	//register for pushes
	pushNotification.registerDevice(
		function(status) {
			var pushToken = status;
			console.warn('push token: ' + pushToken);
		},
		function(status) {
			console.warn(JSON.stringify(['failed to register ', status]));
		}
	);
}

document.addEventListener('push-notification', function(event) {
	var title = event.notification.title;
	var userData = event.notification.userdata;

	console.warn('user data: ' + JSON.stringify(userData));
	alert(title);
});
