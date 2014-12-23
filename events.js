//main.js
document.addEventListener('deviceready', init, true);

$('#user').click(cleardefaultcontent);
$('#passwd').click(cleardefaultcontent);


//login.js
$('#btnLogin').click(function() { login($('#user').val(), $('#passwd').val()); });
$('#btnLogout').click(logout);


//input.js
$('#btnShout').click(function() { input($('#msg').val()); });


//upload.js
$('.btnImage').click(selectupload);


//menu.js
$('.btnMenu').click(togglemenu);
$('#interval').on('change', function() { interval($('#interval').val()); });
$('#eco').on('change', eco);
