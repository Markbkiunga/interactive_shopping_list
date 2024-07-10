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
  console.dir(event.target[0].value);
}
function createAListItem(item) {
  const list = createAnElement('li');
  addText(list, item);
  appendChild(list, ol);
}

const shoppingList = ['Milk', 'Tea', 'Coffee'];
const ol = selectElement('ol');

listen(document, 'DOMContentLoaded', displayItems);
function displayItems() {
  shoppingList.forEach(createAListItem);
}

const form = selectElement('form');
listen(form, 'submit', addItem);
