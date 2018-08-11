var paragraph = document.getElementById("firstsection");

document.write(paragraph);

for(var i = 0; i < paragraph.length; i++) {
	if (paragraph.slice(i, i + 5) === "energy") {

		alert("found it");
	}

}


