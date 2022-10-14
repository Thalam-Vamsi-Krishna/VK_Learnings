var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
var headerTitle = document.getElementById("header-title");
headerTitle.innerText = "Item List";
headerTitle.textContent = "Item Lister";
var item = document.getElementsByClassName("list-group-item");
for (var i = 0; i < item.length; i++) {
  item[i].style.fontWeight = "bold";
  item[i].style.backgroundColor = "yellow";
}
item[2].style.backgroundColor = "green";
var new_item = document.getElementsByClassName("list-new-item");
var new_item_tag = document.getElementsByTagName("list-new-item");
new_item.style.backgroundcolour = "red";
new_item_tag.style.fontWeight = "bold";
