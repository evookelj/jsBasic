var newElem = function(e) {
    var l = document.getElementById("thelist");
    var c = l.appendChild(document.createElement("li"));
    c.innerHTML = "New Thing!";
}

b.addEventListener( 'click', newElem);

var changeHead = function(e) {
    var head = document.getElementById("h");
    head.innerHTML = 
}

var lists = document.getElementsByTagName("li");
var i=0;
for (i=0; i<lists.length; i++) {
    lists[i].addEventListener('hover', changeHead);
}
