// Select all elements with the class 'skill_item' and store them in the skillItems variable as a NodeList.
const skillitems=document.querySelectorAll('.skill_item');

// Loop through each skill item element using the forEach method.
skillitems.forEach(item=> {
    // For each item, find the checkbox element within it and store it in the checkbox variable.
    const checkbox=item.querySelector('input[type="checkbox"]');
     // Add a 'change' event listener to the checkbox.
    checkbox.addEventListener('change',() => {
        // When the checkbox state changes (checked or unchecked), this function will be executed.
        if(checkbox.checked) {
            // If the checkbox is checked, change the background color of the skill item to green (#00FF00).
            item.style.backgroundColor='#00FF00';
        } else {
            // If the checkbox is not checked, change the background color of the skill item to white (#FFFFFF).
            item.style.backgroundColor='#FFFFFF';
        }
    })

})