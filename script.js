const inputField = document.getElementById('inputField');
const pushBtn = document.getElementById('pushBtn');
const popBtn = document.getElementById('popBtn');
const itemList = document.getElementById('itemList');

let items = [];

pushBtn.addEventListener('click', () => {
    const inputValue = inputField.value;
    if (inputValue.trim() !== '') {
        items.push(inputValue);
        const newItem = document.createElement('li');
        newItem.textContent = inputValue;
        itemList.appendChild(newItem);
        inputField.value = '';
    }
});

popBtn.addEventListener('click', () => {
    if (items.length > 0) {
        items.pop();
        itemList.removeChild(itemList.lastChild);
    }
});