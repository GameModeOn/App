$('#smileybox').load('smileybox.html');

function insertsmiley() {
	var newmsg = $('#msg').val()+' '+$(this).attr('alt');
	alert(this);
	alert(newmsg);
	$('#msg').val(newmsg);
}
