const skillItems = document.querySelectorAll('.skill_item');

skillItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            item.style.backgroundColor = '#1fa51f7c'; // Change item color to green when checked
        } else {
            item.style.backgroundColor = '#FFFFFF'; // Change item color to white when not checked
        }
    });
});