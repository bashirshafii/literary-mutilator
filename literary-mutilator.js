
//replace words function

function replaceWords() {
	var oldText = document.getElementById("01").innerHTML;
	var newText = oldText.replace(/frequency/gi, "incidence");
	document.getElementById("01").innerHTML = newText;
}

//highlight words function
function highlight(text) {
	var inputText = document.getElementById("01");
	var innerHTML = inputText.innerHTML;
	var index = innerHTML.indexOf(text);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		inputText.innerHTML = innerHTML;
	}
}





