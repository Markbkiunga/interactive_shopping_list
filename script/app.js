const shoppingList = ['Milk', 'Tea', 'Coffee'];
const ol = selectElement('ol');

function createAnElement(element) {
  return document.createElement(element);
}
function addText(element, text) {
  return (element.innerText = text);
}
function appendChild(child, parent) {
  return parent.appendChild(child);
}
function selectElement(element) {
  return document.querySelector(element);
}
function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}
function addAttribute(element, attribute, content) {
  return element.setAttribute(attribute, content);
}
function addItem(event) {
  event.preventDefault();
  shoppingList.push(event.target[0].value);
  displayItems();
  event.target.reset();
}
function createAListItem(item) {
  const list = createAnElement('li');
  addText(list, item);
  appendChild(list, ol);
  listen(list, 'click', () => {
    list.classList.toggle('checked');
    addAttribute(list, 'toggle', 'checked');
  });
  listen(list, 'dblclick', () => {
    addAttribute(list, 'contentEditable', true);
    list.focus();
  });
  listen(list, 'keydown', (event) => {
    if (event.key === 'Enter') {
      //   event.preventDefault();
      list.blur();
    }
  });
  console.log(shoppingList);
}

function displayItems() {
  ol.innerHTML = '';
  shoppingList.forEach(createAListItem);
}

function clearList() {
  shoppingList.length = 0;
  displayItems();
}

listen(document, 'DOMContentLoaded', displayItems);

const form = selectElement('form');
listen(form, 'submit', addItem);

const deleteButton = selectElement('.delete');
listen(deleteButton, 'click', clearList);
