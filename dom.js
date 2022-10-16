var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
var headerTitle = document.getElementById("header-title");
headerTitle.innerText = "Item List";
headerTitle.textContent = "Item Lister";
var item = document.getElementsByClassName("list-group-item");
for (var i = 0; i < item.length; i++) {
  item[i].style.fontWeight = "bold";
  item[i].style.backgroundColor = "#f4f4f4";
}
//item[2].style.backgroundColor = "green";
var li = document.getElementsByTagName("li");
//li[1].style.backgroundColor = "red";
//li[2].style.display = "none";
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
even[0].style.color = "green";
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#90ee90";
  even[i].style.backgroundColor = "#ffcccb";
}
//manipulating the DOM
var itemList = document.querySelector("#items");
itemList.parentElement.style.backgroundColor = "#f4f4f4";
itemList.childNodes[3].textContent = "Item 2";
itemList.childNodes[5].textContent = "Item 3";
itemList.firstElementChild.textContent = "Item 1";
itemList.firstChild.textContent = "Note : Add atleast 2 items";
itemList.lastElementChild.textContent = "Item 4";
