function upload() {
	var file = document.getElementById('fileToUpload').files[0];
	alert(file);
	spinnerplugin.show();
	MediaCrush.upload(file, function(media) {
		media.wait(function() {
			spinnerplugin.hide();
			alert(media.status);
			alert(media.url);
		});
	});
}
