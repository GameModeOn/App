//main.js
document.addEventListener('deviceready', init, true);

$('[name="user"]').click(cleardefaultcontent);
$('[name="passwd"]').click(cleardefaultcontent);


//login.js
$('#btnLogin').click(function() { login($('[name="user"]').val(), $('[name="passwd"]').val()); });
$('#btnLogout').click(logout);


//menu.js
$('.btnMenu').click(togglemenu);


//intent.js
window.plugins.webintent.getExtra(WebIntent.EXTRA_TEXT, intent1(url), intent2);
