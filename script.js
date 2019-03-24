function init(){
	let image = document.createElement("img");
	image.src = "uno-card-back.jpg";
	image.width = 30;
	image.height = 50;
	document.getElementById("new_element").appendChild(image);
	
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange", "blue", "green", "#ff66cc","#cc33ff", "#99ccff"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}
	var changeSrc = function(event) {
		if (event.target.src) {	
			if (event.target.src == "uno-card-back.jpg") {
				event.target.src = "carte-plus4.jpg";	
			}
			else{
				event.target.src = "uno-card-back.jpg";
			}
		}
	  };
	  
	  document.getElementById("event").addEventListener("mouseover", changeSrc);

}