 
function loadAdverts() {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.readyState = 0;
    	    var res = JSON.parse(this.responseText);
    	    $.each(res, function (i, advert) {
    	        insertAdvert(res[i]);
        	});
        }
    };
    xhttp.open("GET", 'http://vidypie.com/fant/php/getadverts.php', true);
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

function openLogin() {
    var div = document.createElement('div');
    div.className = 'loginBox';
    var form = document.createElement('form');
    var userName = document.createElement('input');
    userName.type = 'text';
    userName.name = 'username';
    userName.placeholder = 'Brukernavn';
    form.appendChild(userName);
    var password = document.createElement('input');
    password.type = 'password';
    password.name = 'password';
    password.placeholder = 'Passord';
    form.appendChild(password);
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
        	console.log(res);
        }
    };
    xhttp.open("GET", 'http://vidypie.com/fant/php/login.php', true);
    xhttp.send();  
}
 