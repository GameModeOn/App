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
	alert('file: '+file);
	var ft = new FileTransfer();
	ft.onprogress = function(progress) { alert(progress.loaded+' / '+progress.total); };
	ft.upload(file, encodeURI(api+'upload.php'), function(success) { alert('success: '+success.hash); }, function(error) { alert('error: '+erro); });
/*	ft.upload(file, encodeURI('https://mediacru.sh/api/upload/file'), function(success) { alert('success: '+success.hash); }, function(error) { alert('error: '+erro); });
	
/*	spinnerplugin.show();
	MediaCrush.upload(file, function(media) {
		media.wait(function() {
			spinnerplugin.hide();
			alert(media.status);
			alert(media.url);
		});
	});*/
}
