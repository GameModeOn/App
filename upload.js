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
		function() { alert('Upload failed!') },
		options
	);
}

function describeupload(r) {
	spinnerplugin.hide();
	alert(r.response);
}

/*function describeupload(r) {
	var hash = r.response;
	
	navigator.notification.prompt(
		'Beschreibung',
		function(d) {
			submitupload('[upload=\''+hash'\']'+d.input1+'[/upload]');
		},
		'Upload',
		'SHOUT',
		'MobileUpload'
	);
}

function submitupload(msg) {
	$('#msg').val(msg);
	input(msg);
}*/
