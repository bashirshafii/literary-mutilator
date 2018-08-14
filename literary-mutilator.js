
function replaceWords() {
	var oldText = document.getElementById("01").innerHTML;
	var newText = oldText.replace(/frequency/gi, "incidence");
	document.getElementById("01").innerHTML = newText;
}



