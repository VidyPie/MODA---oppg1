 
function loadAdverts() {
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        this.readyState = 0;
    	var res = JSON.parse(this.responseText);
    	$.each(res, function (i, advert) {
    	    insertAdvert(res[i]);
    	    console.log(res[i].TITLE);
    	})
    //document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://vidypie.com/fant/php/getadverts.php", true);
  xhttp.send();
}

function insertAdvert(res) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var div = document.createElement('div');
    div.style.width = (w / 4 - 50).toString() + 'px';
    div.style.height = div.style.width;
    div.className="contentbox";
    var title = document.createElement('p');
    var tText = document.createTextNode(res.TITLE);
    title.appendChild(tText);
    div.appendChild(title);
    document.getElementById("content").appendChild(div);
    
    //elem.prepend($('<p>This paragraph was added by jQuery.</p>').fadeIn('slow'));
}
 