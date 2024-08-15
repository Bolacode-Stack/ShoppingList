const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Creating add item function
function addItem(e)  {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem.value === '')  { 
        alert('Please add an item');
        return;
    }
    // console.log('Success');67

    // Create List Item
   const li =  document.createElement('li');
   li.appendChild(document.createTextNode(newItem));

//    console.log(li);

// calling createButton inside addItem function
// Passing button class as an argument to createButton function and setting it to a variable
const button = createButton("remove-item btn-link text-red"); 

// Adding Button and Icon to the list item
li.appendChild(button)
// console.log(button);
console.log(li);

// Adding it to the DOM using appendChild
itemList.appendChild(li);
itemInput.value = '';
}

// Create Button Function
function createButton(classes)  {
    const button = document.createElement('button');
    button.className = classes;

    // Appending icon to the button
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
    // console.log(button)
}

// Create Icon Function
function createIcon(classes)  {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}




// createButton("remove-item btn-link text-red")

// Event Listeners
itemForm.addEventListener('submit', addItem);