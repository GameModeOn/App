function selectupload() {
	navigator.camera.getPicture(
		function(file) {
			spinnerplugin.show();
			upload(file);
		},
		function() {
			window.plugins.toast.showLongBottom('Selection failed!');
		},
		{
			sourceType : 0,
			targetWidth: 1920,
			targetHieght: 1920
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
		function() { window.plugins.toast.showLongBottom('Upload failed!') },
		options
	);
}

function describeupload(r) {
	hash = r.response;
	
	spinnerplugin.hide();
	
	navigator.notification.prompt(
		'Gib deinem Upload einen Titel:',
		submitupload,
		'Upload',
		['SHOUT'],
		'MobileUpload'
	);
}

function submitupload(d) {
	var description = d.input1;
	var msg = '[upload=\''+hash+'\']'+description+'[/upload]';
	
	$('#msg').val(msg);
	input(msg);
}
