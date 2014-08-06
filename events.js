//main.js
document.addEventListener('deviceready', init, true);

$('[name="user"]').click(cleardefaultcontent);
$('[name="passwd"]').click(cleardefaultcontent);


//login.js
$('#btnLogin').click(login);
$('#btnLogout').click(logout);


//menu.js
$('.btnMenu').click(togglemenu);