function selectupload() {
	navigator.camera.getPicture(
		function(file) {
			spinnerplugin.show();
			upload(file);
		},
		function() {
			alert('ERROR!');
		},
		{
			sourceType : 0
		}
	);
}

function upload(file) {
	var uri = encodeURI(api+'upload.php');

	var options = new FileUploadOptions();
	var params = {};
	params.sid = sid;
	options.params = params;

	var ft = new FileTransfer();

	ft.upload(
		file,
		uri,
		submitupload,
		navigator.notification.alert('ERROR!'); },
		options
	);
}

function describeupload(r) {
	var hash = r.response;
	
	navigator.notification.prompt(
		'Beschreibung',
		submitupload(d, hash),
		'Upload',
		'SHOUT',
		'MobileUpload'
	);
}

function submitupload(d, hash) {
	var msg = '[upload=\''+hash'\']'+d.input1+'[/upload]';
	$('#msg').val(msg);
	input(msg);
}
