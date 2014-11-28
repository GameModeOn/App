function selectupload() {
	navigator.camera.getPicture(upload,
		function(e) {
			alert('error: '+e);
		}, {
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

	spinnerplugin.show;
	ft.upload(file, uri, void, function() { alert('ERROR!'); }, params);
	spinnerplugin.hide;
}
