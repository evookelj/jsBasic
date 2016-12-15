var newElem = function(e) {
    var l = document.getElementById("thelist");
    var c = l.appendChild(document.createElement("li"));
    c.innerHTML = "New Thing!";
}

b.addEventListener( 'click', newElem);

var lists = document.getElementsByTagName("li");
for (var i=0; i<lists.length; i++) {
    //doesn't yet work b/c 'hover' isnt an event
    lists[i].addEventListener('hover',function(e){
	console.log(this);
    });
}
