let table = document.querySelector('.table');
let amountBoxes = 621;


for (let i = 0; i < amountBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    table.append(box)

    box.addEventListener('mouseenter', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
}


function randColor() {
    let randomNumber = Math.floor(Math.random() * 300) ;
    return randomNumber
}


function setColor(item) {
    item.style = `background: rgb(${randColor()}, ${randColor()}, ${randColor()});`
}


function removeColor(item) {
    item.style = `background: '';`
}