//main.js
document.addEventListener('deviceready', init, true);

$('#user').click(cleardefaultcontent);
$('#passwd').click(cleardefaultcontent);


//login.js
$('#submitlogin').click(function() { login($('#user').val(), $('#passwd').val()); });
$('#logout').click(logout);


//input.js
$('#shout').click(function() { input($('#msg').val()); });


//upload.js
$('.btnImage').click(selectupload);

//smileybox.js
$('.btnSmileybox').click(function() { $('#smileybox').toggle(); });

//menu.js
$('.btnMenu').click(togglemenu);
$('#interval').on('change', interval);
$('#eco').on('change', eco);
$('#push').on('change', push);
