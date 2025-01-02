let items = ["hello World," , "123"];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"

input.onkeyup = function(e){
    if(e.keyCode == 13){ addItem()
        }
    }

function renderItems() {
    itemsDiv.innerHTML = null;

    for(const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.margin = "10px"

        const text = document.createElement("p")
        text.textContent = item;
        text.style.display = "inline"
        text.style.marginRight = "10px"

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)
    }
}

renderItems()

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
    const value = input.value;
    if (!value) {
        return
    }
    else {
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
    }
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)