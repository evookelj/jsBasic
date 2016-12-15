var newElem = function(e) {
    var l = document.getElementById("thelist");
    var c = l.appendChild(document.createElement("li"));
    c.innerHTML = "New Thing!";
}

b.addEventListener( 'click', newElem);

var lists = document.getElementsByTagName("hover");
for (var i=0; i<lists.length; i++) {
    lists[i].addEventListener('click',function(e){
	console.log(this);
    });
}
