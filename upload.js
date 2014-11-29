function selectupload() {
	navigator.camera.getPicture(
		function(file) {
			spinnerplugin.show();
			upload(file);
		},
		function() {
			navigator.notification.alert('Selection failed!');
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
		describeupload,
		function() { navigator.notification.alert('Upload failed!') },
		options
	);
}

/*function describeupload(r) {
	hash = r.response;
	
	navigator.notification.prompt(
		'Beschreibung',
		submitupload
		'Upload',
		['SHOUT', 'test'],
		'MobileUpload'
	);
}

function submitupload(d) {
	var description = d.input1;
	var msg = '[upload=\''+hash'\']'+description+'[/upload]';
	
	$('#msg').val(msg);
	input(msg);
}*/
