var userInput = document.querySelector("#userinput");
var enterButton = document.querySelector("#enter");
var li =  document.getElementsByTagName("li");
var ul = document.querySelector("ul");

function createListElement()
{
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(userInput.value));
	ul.appendChild(li);
	userInput.value="";

	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	li.appendChild(deleteButton);
	deleteButton.onclick = deleteElement;

	var doneButton = document.createElement("button");
	doneButton.appendChild(document.createTextNode("Done"));
	li.appendChild(doneButton);

	doneButton.onclick = doneItem;



}

function deleteElement(event)
{
	
	event.target.parentNode.remove();
}

function doneItem(eve)
{
	
	eve.target.parentNode.classList.toggle("done");
}

function addListAfterClick()
{
	if (userInput.value.length > 0)
	{
		createListElement();
	}
}

function addListAfterKeyPress(event)
{
	if (userInput.value.length > 0 && event.keyCode == 13) 
	{
		createListElement();
	}

}
enterButton.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress" , addListAfterKeyPress)