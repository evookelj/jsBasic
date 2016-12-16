//========================Part 1
var newElem = function(e) {
    var l = document.getElementById("thelist");
    var c = l.appendChild(document.createElement("li"));
    c.innerHTML = "New Thing!";
}

b.addEventListener( 'click', newElem);

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

//=======================Part 2
var fibN = function(n) {
    if (n<2) { return 1; }
    return fibN(n-1) + fibN(n-2);
};

var ctr = 0;
var fiblist = document.getElementById("fiblist");
var fb = document.getElementById("fb");
fb.addEventListener('click',
		    function(e){
			var newfib = fiblist.appendChild(document.createElement("li"));
			newfib.innerHTML = fibN(ctr++);
		    });
