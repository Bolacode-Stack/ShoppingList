const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const items = itemList.querySelectorAll('li');

// display items function
function displayItems()  {
    const itemsFromStorage = getItemsFromStorage();

    // Adding the items to the dom using forEach
    itemsFromStorage.forEach((item)  => {
        addItemToDOM(item)
    });

    // Run this to make filter and clear all button show in the DOM
    checkUI();

}


// Creating add item function
function onAddItemSubmit(e)  {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem.value === '')  { 
        alert('Please add an item');
        return;
    }
    // console.log('Success');67

    // Create List Item
//    const li =  document.createElement('li');
//    li.appendChild(document.createTextNode(newItem));

//    console.log(li);

// calling createButton inside addItem function
// Passing button class as an argument to createButton function and setting it to a variable
// const button = createButton("remove-item btn-link text-red"); 

// Adding Button and Icon to the list item
// li.appendChild(button)
// console.log(button);
// console.log(li);

// Adding it to the DOM 
// itemList.appendChild(li);

// calling checkUI() inside addItem function so the li's are added to the NodeList

// Pass in the new item that's coming from the form as argument
addItemToDOM(newItem);

// Add item to loca storage
addItemToStorage(newItem)

checkUI();

itemInput.value = '';
}

// New function: addItemToDOM
function addItemToDOM(item)  {
    // Create list item
    const li =  document.createElement('li');
    li.appendChild(document.createTextNode(item));

const button = createButton("remove-item btn-link text-red"); 

// Adding Button and icon to the list item
li.appendChild(button);

// Add li to the DOM
itemList.appendChild(li);
}

// Add to localStorage
function addItemToStorage(item)  {
    // Check to see if there are already items in local storage
    // let itemsFromStorage;
    // if(localStorage.getItem('items') === null)  {
    //     itemsFromStorage = [];
    // } else {
    //     itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    // }

    const itemsFromStorage = getItemsFromStorage();

    // Take new item and add it to the array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
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

// Get items from storage function
function getItemsFromStorage()   {
    let itemsFromStorage;
    if(localStorage.getItem('items') === null)  {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

// on click item function
function onClickItem(e)  {
    if(e.target.parentElement.classList.contains('remove-item')) {
        removeItem();
    }

}

// RemoveItem function
function removeItem(e)  {
    // console.log(e.target.parentElement.classList);

    if(e.target.parentElement.classList.contains('remove-item'))  {
        // console.log('click');

        // adding confrim() which shows an alert message before deleting the item
        if (confirm('Are You Sure?'))  {
            e.target.parentElement.parentElement.remove();

    //  Calling checkUI inside removeItem so filter and clear all button goes away
            checkUI();
        }
    }
}

// clearItems Function
function clearItems()   {

    // Method 1
    // itemList.innerHTML = '';

    // Using while loop
    while (itemList.firstChild)  {
        itemList.removeChild(itemList.firstChild)
    }

    // calling checkUI() inside clearItems function so the filter and clearall button goes away
    checkUI();
}


function filterItems(e)  {
    // Getting the items
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    
    // console.log(text);
    //   Getting text content for each item
    items.forEach((item)  => {
        // Logs out every list item in the items binding
        // console.log(item);

// Getting the text out of each list item
// the textNode is the first child of the li tag
    const itemName = item.firstChild.textContent.toLowerCase();

    // Log out item Name in the li tags in strings / adding textContent omits the quotes 
    // console.log(itemName);

    // if (itemName.indexOf(text)  !=  -1)  {
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }

    if(itemName.indexOf(text)  != -1)   {
        item.style.display = 'flex';
    } else {
        item.style.display = 'none';
    }
  });
}

// Clear UI State
function checkUI()  {
    // running items inside of the function instead of the global scope 
const items = itemList.querySelectorAll('li');
    // console.log(items);
    if (items.length === 0)  {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearButton.style.display = 'block'
        itemFilter.style.display = 'block';
    }
}

// Initialize app so we dont have it all in the global scope
const init = ()  =>  {

    
    // Event Listener for addItem function
    itemForm.addEventListener('submit', onAddItemSubmit);

// Event Listener for removing items
itemList.addEventListener('click', onClickItem);

// Event Listener for clearButton
clearButton.addEventListener('click', clearItems);

// Event Listener for filter function
itemFilter.addEventListener('input', filterItems);

// New event of the document
document.addEventListener('DOMContentLoaded', displayItems);

checkUI();
}

init();


// localStorage and sessionStorage
// let output = localStorage.setItem('name', 'Brad');

// output = localStorage.getItem('name');
// output = localStorage.removeItem('name')
// output = localStorage.clear();
// console.log(output);




