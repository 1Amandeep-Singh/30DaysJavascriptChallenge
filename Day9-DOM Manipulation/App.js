//Activity 1: Selecting and Manipulating

//Task 1: Select an HTML element by its ID and change its text content.
function btnonclick(){
     document.getElementById("labelid").innerHTML = "Text of this label is added by app.js";
}

//Task 2: Select an HTML element by its class and change its background color.
function btnforbgchange() {
    let elements = document.getElementsByClassName("container");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
}
//Activity 1 end

//Activity 2: Creating and Appending Elements 

//Task 3: Create a new div elements with some text content and append it to the body.
function btnforcreateandappendelement(){
    //step1: create a new div element 
    const newdivelement = document.createElement("div");

    //create text tag for the new div
    const newlabeltag = document.createTextNode("Appending text in the newly created div");

     // Add the text content to the new div
    newdivelement.appendChild(newlabeltag);

     // Append the new div to the body
     document.body.appendChild(newdivelement);
}

//Task 4: Create a new li element and add it to an existing ul list.

function addListItem() {
    // Create a new li element
    let newLi = document.createElement("li");
    
    // Create some text content for the new li
    let newContent = document.createTextNode("New Item");
    
    // Add the text content to the new li
    newLi.appendChild(newContent);
    
    // Append the new li to the existing ul
    document.getElementById("myList").appendChild(newLi);
}
//Activity 2 end

//Activity 3: Removing Elements

//Task 5: Select an HTML element and remove it from the DOM.

function removeListItem() {

    
    document.getElementById("labelid").remove();
    
}

//Task 6: Remove the last child of a specific HTML element.

function removeLastChild() {
    // Select the ul element
    let ul = document.getElementById("myList");
    
    // Check if ul has any child nodes
    if (ul.lastChild) {
        // Remove the last child of the ul element
        ul.removeChild(ul.lastChild);
    }
}

//Activity 3 end

//Activity 4: Modifying Attributes and Classes.

//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tab).

function changeImageSource() {
    // Select the img element
    let img = document.getElementById("myImage");
    
    // Change the src attribute of the img element
    img.setAttribute("src", "new_image.jpEg");
    
    // Optionally, you can also change the alt attribute
    img.setAttribute("alt", "New Image");
}

//Task 8: Add and remove a CSS class to/from an HTML element.

function addHighlight() {
    // Select the paragraph element
    let paragraph = document.getElementById("myParagraph");
    
    // Add the highlight class
    paragraph.classList.add("highlight");
}

function removeHighlight() {
    // Select the paragraph element
    let paragraph = document.getElementById("myParagraph");
    
    // Remove the highlight class
    paragraph.classList.remove("highlight");
}

//Activity 4 end

//Activity 5: Event Handling

//Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let button = document.getElementById("myButton");

// Add click event listener to the button
button.addEventListener("click", function() {
    // Select the paragraph element
    let paragraph = document.getElementById("paragraph");
    
    // Change the text content of the paragraph
    paragraph.textContent = "This is the new text.";
});

//Task 10: Add a mouseover event listener to an element that changes its border color.
 // Select the element
 let element = document.getElementById("myElement");

 // Add mouseover event listener to the element
 element.addEventListener("mouseover", function() {
     // Change the border color of the element
     element.style.borderColor = "red";
 });

 // Optional: Add mouseout event listener to reset the border color
 element.addEventListener("mouseout", function() {
     // Reset the border color of the element
     element.style.borderColor = "black";
 });

//Activity 5 end
