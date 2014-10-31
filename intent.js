window.plugins.webintent.getExtra(WebIntent.EXTRA_TEXT, 
	function(url) {
		alert('extra'+url);
		// url is the value of EXTRA_TEXT
	}, function() {
		alert('no extra'+url);
		//There was no extra supplied.
	}
);
