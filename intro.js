var newElem = function(e) {
    var l = document.getElementById("thelist");
    var c = l.appendChild(document.createElement("li"));
    c.innerHTML = "New Thing!";
}

b.addEventListener( 'click', newElem)
