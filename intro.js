//========================Point 1
var newElem = function(e) {
    var l = document.getElementById("thelist");
    var c = l.appendChild(document.createElement("li"));
    c.innerHTML = "New Thing!";
}

b.addEventListener( 'click', newElem);

//========================Point 2
var lists = document.getElementsByTagName("li");
var list = document.getElementById("thelist");
var head = document.getElementById("h");
var origHead = head.innerHTML;
for (var i=0; i<lists.length; i++) {
    //doesn't yet work b/c 'hover' isnt an eventg
    lists[i].addEventListener('mouseover',
			      function(e){
				  head.innerHTML = this.innerHTML
			      });
    lists[i].addEventListener('click',
			      function(e){
				  this.remove()
			      });
    lists[i].addEventListener('mouseout',
			      function(e){
				  head.innerHTML = origHead
			      });
}
