// const secondLi = document.getElementById('second-li');
// const firstLi = document.querySelector('li');
// console.log(firstLi);
// console.log(secondLi);

// Return NodeList
const listItems = document.querySelectorAll('li');
// listItems[0].style.color = 'red';
// listItems[0].style.backgroundColor = 'blue';
// listItems[0].textContent = 'foo';
// listItems[0].value = 5; // change order of marker list
// listItems[0].setAttribute('value', '7');
// // listItems[0].setAttribute('class', 'blue big');
// // listItems[0].classList.remove('big');
// listItems[0].classList.add('blue');
// // listItems[0].classList.add('blue', 'big');
// listItems[0].classList.toggle('big'); // add
// listItems[0].classList.toggle('big'); // remove
// listItems[0].className = 'blue big'; // init to this value

// listItems.forEach(li => console.log(li));
// Array.from(listItems).map(li => console.log(li));

// Get By css-classname
// console.log(document.getElementsByClassName('list-item'));

// Get by TagName: Return HtmlCollection (Not as powerful as NodeList)
// HtmlCollection not iterable (forEach function) -> It's better querySelectorAll
// console.log(document.getElementsByTagName('li'));


// Create nodes
// const p = document.createElement('p');
// p.textContent = 'Hello World!!';
// Another way
// const text = document.createTextNode('Hellooo');
// p.append(text);

// document.body.appendChild(p); // at the end of the Document
// document.body.prepend(p); // at the begining of the Document

// Not recommendable
// document.body.innerHTML += '<p>HTML Test string</p>';

// But useful for this usecase: remove all elements from some element
//document.body.innerHTML = '';

// Be careful about security issues (not allow user input inject code)
//document.body.innerHTML = '<script>hackingThis()</script>';

// Creating nodes in Loop
// Poor implementation
// for (let i = 0; i < 3; i++) {
//     parent = document.querySelector('ol');
//     const li = document.createElement('li');
//     li.textContent = `List item with i=${i}`;
//     parent.append(li); // browser render the page in each iteration
// }

// Better implementation
// parent = document.querySelector('ol');
//listItemsToAdd = [];
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li');
//     li.textContent = `List item with mm i=${i}`;
//     //listItemsToAdd.push(li);
//     fragment.append(li);
// }

//parent.append(...listItemsToAdd);
// parent.append(fragment);

// Removing elements
// listItems[0].parentNode.removeChild(listItems[0]);
// console.log(listItems);
// listItems[0].remove();
// console.log(listItems);

// const element = document.getElementById('div-02');
//element.remove(); // Removes the div with the 'div-02' id

// DOM sizes
console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.getComputedStyle(listItems[0]).fontSize);

const scrollable = document.getElementById('scrollable');
console.log(scrollable.clientHeight); // visible
console.log(scrollable.clientHeight); // include border and horizontal bar if it exists
console.log(scrollable.scrollHeight);

console.log(scrollable.offsetTop);
console.log(scrollable.querySelectorAll('p')[0].offsetTop);
console.log(scrollable.querySelectorAll('p')[1].offsetTop);
console.log(scrollable.querySelectorAll('p')[5].offsetTop);

scrollable.querySelectorAll('p')[5].scrollIntoView();

scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[2].offsetTop,
    behavior: "smooth"
});