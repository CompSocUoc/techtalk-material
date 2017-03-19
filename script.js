var items = ['Eggs', 'Carrot'];
var listElement = document.getElementById('groceryList');

var loadList = function(){
  listElement.innerHTML = '';
  for(var i = 0; i<items.length; i++){
    listElement.innerHTML += i+1 + ". " + items[i] + "<br/>";
  }
};

var addItem = function(){
  var listItem = prompt("What do you want to add to the list?");
  items.push(listItem);
  loadList();
};

var removeItem = function(){
  var removeItem = prompt("Which Item do you want to remove?");
  items.splice(removeItem-1,1);
  loadList();
}

loadList();