//main.js
document.addEventListener('deviceready', init, true);

$('#user').click(cleardefaultcontent);
$('#passwd').click(cleardefaultcontent);


//login.js
$('#btnLogin').click(function() { login($('#user').val(), $('#passwd').val()); });
$('#btnLogout').click(logout);


//input.js
$('#btnShout').click(function() { input($('#msg').val()); });


//menu.js
$('.btnMenu').click(togglemenu);


//intent.js
window.plugins.webintent.getExtra(WebIntent.EXTRA_TEXT, intent1(url), intent2);
