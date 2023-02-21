const button = document.querySelector('button');

button.addEventListener('click', onClick);
// document.body.addEventListener('click', onClick);
// I want to capture this event during capturing phase
document.body.addEventListener('click', onClick, true);

function onClick(event) {
    // console.log(event);
    // console.log(event.type);
    // Event Propagation: 3 phases: 
    // 1. Capturing phase: start at root of DOM and traverse down the DOM -> 2. Target phase: fire the event on the actual element -> 3. Bubbling phase: we go back up the three
    // event.stopPropagation(); // Bubbling phase won't happen
    event.preventDefault();
    console.log(event.target);
    console.log(this);
}