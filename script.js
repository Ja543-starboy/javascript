// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const textElement = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        textElement.textContent = 'Text changed dynamically!';
    });

    // 2. Modify CSS styles via JavaScript
    const styleTextBtn = document.getElementById('style-text-btn');
    
    styleTextBtn.addEventListener('click', function() {
        textElement.classList.toggle('highlight');
    });

    // 3. Add/remove element when button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const dynamicElementContainer = document.getElementById('dynamic-element-container');
    let elementExists = true;
    
    toggleElementBtn.addEventListener('click', function() {
        if (elementExists) {
            dynamicElementContainer.innerHTML = '';
            toggleElementBtn.textContent = 'Add Element';
        } else {
            dynamicElementContainer.innerHTML = '<div id="dynamic-element">Newly added element!</div>';
            toggleElementBtn.textContent = 'Remove Element';
        }
        elementExists = !elementExists;
    });
});