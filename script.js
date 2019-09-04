 
function loadAdverts() {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.readyState = 0;
    	    var res = JSON.parse(this.responseText);
    	    $.each(res, function (i) {
    	        insertAdvert(res[i]);
        	});
        }
    };
    xhttp.open('GET', 'http://vidypie.com/fant/php/getadverts.php', true);
    xhttp.send();
}

function insertAdvert(res) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var div = document.createElement('div');
    div.style.width = (w / 4 - 50).toString() + 'px';
    div.style.height = div.style.width;
    div.className = 'contentbox';
    var title = document.createElement('p');
    var tText = document.createTextNode(res.TITLE);
    title.appendChild(tText);
    div.appendChild(title);
    document.getElementById('content').appendChild(div);
}

function addInput(form, type, name, placeholder) {
    var input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    form.appendChild(input);  
    return input;
}

function openLogin() {
    if ($('.loginBox').length > 0)
        return;
    var div = document.createElement('div');
    div.className = 'loginBox';
    var form = document.createElement('form');
    addInput(form, 'text', 'username', 'Brukernavn');
    addInput(form, 'password', 'password', 'Passord');
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Logg inn';
    form.appendChild(submit);
    div.appendChild(form);
    document.body.appendChild(div);
    $('.loginBox').submit(function (a, b) {
         tryLogin($('.loginBox form').serialize());
         return false;
        });
}

function tryLogin(data) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.readyState = 0;
        	var res = JSON.parse(this.responseText);
        	$.each(res, function (i) {
    	        if (res[i].valid) {
    	            validLogin(res[i]);
    	            return;
    	        }
        	});
            invalidLogin();
        }
    };
    xhttp.open('GET', 'http://vidypie.com/fant/php/login.php?'+data, true);
    xhttp.send();  
}

function validLogin (res) {
    $('.loginBox').remove();
    window.username = res.username; 
    $('#loginBtn').hide();
    $('#userBtn').hide();
    $('#newBtn').show();
    $('#logoutBtn').show();
}

function invalidLogin() {
    
}

function logout() {
    window.username = ''; 
    $('#logoutBtn').hide();
    $('#loginBtn').show();
    $('#userBtn').show();
}
 
function newUser() {
    if ($('.userBox').length > 0)
        return;
    var div = document.createElement('div');
    div.className = 'userBox';
    var form = document.createElement('form');
    addInput(form, 'text', 'adress', 'E-post').disabled = true;
    addInput(form, 'text', 'username', 'Ønsket Brukernavn');
    addInput(form, 'password', 'password', 'Ønsket Passord');
    addInput(form, 'password', 'password2', 'Gjenta passord');
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Opprett bruker';
    form.appendChild(submit);
    div.appendChild(form);
    document.body.appendChild(div);
    $('.userBox').submit(function (a, b) {
        clearNewUserErrorMarking();
        if (checkNewUserFormValues()) {
            tryNewUser($('.userBox form').serialize());
        }
        return false;
        });
}

function clearNewUserErrorMarking() {
    $('.userBox form input[name=username]').css({"background-color": "white"});
    $('.userBox form input[name=password]').css({"background-color": "white"});
    $('.userBox form input[name=password2]').css({"background-color": "white"});
    removeErrorMsg($('.userBox')[0]);
}

function checkNewUserFormValues() {
    var check = true;
    var username = $('.userBox form input[name=username]');
    if (username[0].value === '' || username[0].value.length < 5) {
        errorMsg($('.userBox')[0], 'Brukernavnet er for kort. Må være 5 tegn eller mer.');
        username.css({"background-color": "#ff5757"});
        check = false;
    }
    var pw = $('.userBox form input[name=password]'); 
    var pw2 = $('.userBox form input[name=password2]'); 
    if (pw[0].value === '' || pw[0].value.length < 5) {
        pw.css({"background-color": "#ff5757"});
        errorMsg($('.userBox')[0], 'Passordet er for kort. Må være 5 tegn eller mer.');
        check = false;
    }
    if (pw2[0].value === '' || pw2[0].value.length < 5) {
        pw2.css({"background-color": "#ff5757"});
        errorMsg($('.userBox')[0], 'Passordet er for kort. Må være 5 tegn eller mer.');
        check = false;
    }
    if (pw[0].value !== pw2[0].value && check) {
        pw.css({"background-color": "#ff5757"});
        pw2.css({"background-color": "#ff5757"});
        errorMsg($('.userBox')[0], 'Passordene er ikke like.');
        check = false;
    }
    return check;
}

function tryNewUser(data) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.readyState = 0;
            console.log(this.responseText);
        	var res = JSON.parse(this.responseText);
        	$.each(res, function (i) {
    	        if (res[i].valid) {
    	            newValidUser();
    	            return;
    	        } else if (res[i].dupUser) {
    	            errorMsg($('.userBox')[0], 'Dette brukernavnet er allerede i bruk. Vennligst velg et annet brukernavn.');
    	            return;
    	        } 
        	});
        }
    };
    xhttp.open('GET', 'http://vidypie.com/fant/php/newuser.php?'+data, true);
    xhttp.send();  
}

function newValidUser() {
    
}

function errorMsg(box, msg) {
    var error = $(box).find('.errortxt')[0];
    if (error) {
        return;
    }
    var p = document.createElement('p');
    p.className = 'errortxt';
    p.textContent = msg;
    box.appendChild(p);
    $(box).css({'height': $(box).height() + $(p).height() + 20});
}

function removeErrorMsg(box) {
    var error = $(box).find('.errortxt')[0];
    if (error) {
        $(box).css({'height': $(box).height() - $(error).height() - 20}); 
        $(error).remove();
    }
}