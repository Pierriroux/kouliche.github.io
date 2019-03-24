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
			if (event.target.src.includes("uno-card-back.jpg")) {
				event.target.src = "carte-plus4.jpg";	
			}
			else{
				event.target.src = "uno-card-back.jpg";
			}
		}
	  };
	  
	  document.getElementById("event").addEventListener("mouseover", changeSrc);

}
function addItem(){
	let list = document.createElement("li");
	let put = document.getElementById("iput").value;
	let str = document.createTextNode(put);
	if(document.getElementById("important").checked)
	{
		list.style.color = "red";
	}
	if(document.getElementById("bought").checked)
	{
		list.style.textDecoration = "underline";
	}
	list.appendChild(str);
	document.getElementById("shoplist").appendChild(list);
}