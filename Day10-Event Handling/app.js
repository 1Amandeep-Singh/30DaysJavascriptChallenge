//Activity 1: Basic Event Handling

//Task 1: Add a click event listener to a button that changes the text content of a paragraph

// Select the button and paragraph elements
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the paragraph
    paragraph.textContent = 'The text has been changed!';
});

//Task 2: Add a double click event listener to an image that toggles its visibility

// Select the image element
const image = document.getElementById('myImage');

// Add a double-click event listener to the image
image.addEventListener('dblclick', () => {
    // Toggle the visibility of the image
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

//Activity 1 end

//Activity 2: Mouse events

//Task 3: Add a mouseover event listener to an element that changes its background color

  // Get the element by its ID
  var myElement = document.getElementById('myElement');

  // Add a mouseover event listener
  myElement.addEventListener('mouseover', function() {
      // Change the background color on mouseover
      myElement.style.backgroundColor = 'lightblue';
  });

  // Add a mouseout event listener to revert the background color
  myElement.addEventListener('mouseout', function() {
      // Revert the background color on mouseout
      myElement.style.backgroundColor = 'lightgray';
  });

//Task 4: Add mouseout event listener to an element that resets its background color

 // Select the element
 const element = document.getElementById('Element');

 // Add mouseout event listener
 element.addEventListener('mouseout', function() {
     // Reset background color
     element.style.backgroundColor = 'lightblue';
 });

 // Optional: Add mouseover event listener to change the background color
 element.addEventListener('mouseover', function() {
    element.style.backgroundColor = 'lightcoral';
 });

//Activity 2 end

//Activity 3: Keyboard Events 

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console

  // Select the input field
  const myInput = document.getElementById('myInput');

  // Add keydown event listener
  myInput.addEventListener('keydown', function(event) {
      // Log the key pressed to the console
      console.log(`Key pressed: ${event.key}`);
  });

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph

 // Select the input field and paragraph
 const Input = document.getElementById('Input');
 const displayParagraph = document.getElementById('displayParagraph');

 // Add keyup event listener
 Input.addEventListener('keyup', function() {
     // Display the current value of the input field in the paragraph
     displayParagraph.textContent = `Current value: ${Input.value}`;
 });

//Activity 3 end

//Activity 4: Form Events

//Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console

  // Select the form
  const myForm = document.getElementById('myForm');

  // Add submit event listener
  myForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Create a FormData object
      const formData = new FormData(myForm);

      // Log the form data to the console
      for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
      }
  });

//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph

// Select the dropdown and paragraph elements
const mySelect = document.getElementById('mySelect');
const dispParagraph = document.getElementById('dispParagraph');

// Add change event listener to the dropdown
mySelect.addEventListener('change', function() {
    // Display the selected value in the paragraph
    dispParagraph.textContent = `Selected value: ${mySelect.value}`;
});

//Activity 4 end

//Activity 5: Event Delegation

//Task 9: Add a click event listener to a list that logs the text content of the clicked list items using event delegation

// Select the list element
const myList = document.getElementById('myList');

// Add click event listener to the list using event delegation
myList.addEventListener('click', function(event) {
    // Check if the clicked element is a list item
    if (event.target && event.target.nodeName === 'LI') {
        // Log the text content of the clicked list item
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

//Task 10: Add an event listener to a parent element that listens for events form dynamically added child elements

// Select the parent element and the button to add child elements
const parent = document.getElementById('parent');
const childContainer = document.getElementById('childContainer');
const addButton = document.getElementById('addButton');

// Add click event listener to the parent element using event delegation
parent.addEventListener('click', function(event) {
    // Check if the clicked element is a dynamically added child element
    if (event.target && event.target.classList.contains('dynamic-child')) {
        console.log(`Clicked child element: ${event.target.textContent}`);
    }
});

// Add click event listener to the button to add new child elements
addButton.addEventListener('click', function() {
    // Create a new child element
    const newChild = document.createElement('div');
    newChild.textContent = `Dynamic Child ${childContainer.children.length + 1}`;
    newChild.className = 'dynamic-child';
    
    // Append the new child element to the container
    childContainer.appendChild(newChild);
});

//Activity 5 end