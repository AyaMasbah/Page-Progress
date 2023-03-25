let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let msgEl = document.getElementById("msg-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " ⚡ "
    saveEl.textContent += countStr
    msgEl.textContent = "You've read "+  count +" pages last time 👍"
    countEl.textContent = 0
    count = 0
}
