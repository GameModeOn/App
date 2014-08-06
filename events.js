//main.js
document.addEventListener('deviceready', init, true);

$('[name="user"]').click(cleardefaultcontent);
$('[name="passwd"]').click(cleardefaultcontent);


//login.js
$('#btnLogin').click(function() { login($('#user').val(), $('#passwd').val()); });
$('#btnLogout').click(logout);


//input.js
//$('#input').click(function() { input($('#msg').val()); }


//menu.js
$('.btnMenu').click(togglemenu);


//intent.js
window.plugins.webintent.getExtra(WebIntent.EXTRA_TEXT, intent1(url), intent2);
