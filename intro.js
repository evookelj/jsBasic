//========================Point 1
var newElem = function(e) {
    var l = document.getElementById("thelist");
    var c = l.appendChild(document.createElement("li"));
    c.innerHTML = "New Thing!";
}

b.addEventListener( 'click', newElem);

//========================Point 2
var lists = document.getElementsByTagName("li");
for (var i=0; i<lists.length; i++) {
    //doesn't yet work b/c 'hover' isnt an eventg
    lists[i].addEventListener('hover',function(e){
	console.log(this);
    });
}

//========================Point 3

//========================Point 4
var lists = document.getElementsByTagName("li");
var list = document.getElementById("thelist");
for (var i=0; i<lists.length; i++) {
    lists[i].addEventListener('click',function(e){
	this.remove()
    });
}
