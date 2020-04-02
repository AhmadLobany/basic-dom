const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
header.setAttribute('id','main-header')
document.body.prepend(header)


const subHeader = document.createElement("h2")
subHeader.innerHTML = 'Game by: ~Ahmad Lobany~'
subHeader.setAttribute('id','sub-header')
document.getElementById('main-header').appendChild(subHeader)


// ********* Completing the Game ************** //
const upArrow = document.getElementById("up")

upArrow.onclick = function () {
    const ball = document.getElementById('block')
    let bottom = parseInt(ball.style.bottom) || 400
    bottom += 15
    ball.style.bottom = bottom + "px"
}

const downArrow = document.getElementById("down")
downArrow.onclick = function () {
    const ball = document.getElementById('block')
    let bottom = parseInt(ball.style.bottom) || 400
    bottom -= 15
    ball.style.bottom = bottom + "px"
}


const leftArrow = document.getElementById("left")
leftArrow.onclick = function () {
    const ball = document.getElementById('block')
    let right = parseInt(ball.style.right) || 400
    right += 15
    ball.style.right = right + "px"
}


const rightArrow = document.getElementById("right")
rightArrow.onclick = function () {
    const ball = document.getElementById('block')
    let right = parseInt(ball.style.right) || 400
    right -= 15
    ball.style.right = right + "px"
}




// ************************************************************************************* //








//************** Box ********************* */
// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

// const changeColor = function () {
//     box.style.backgroundColor = "#8e44ad"
// }


// const box = document.createElement('div')
// box.setAttribute('id','box')
// box.innerHTML = "Hover over me!"
// // box.setAttribute('onmouseenter','enterColor()')
// // box.setAttribute('onmouseleave','leaveColor()')
// box.setAttribute('onClick','changeColors()')
// document.getElementById('sub-header').appendChild(box)



//************** List ********************* */
//  const addItem = function () {
//     const item = document.createElement('li')
//     list.setAttribute('class','item')
//     item.innerHTML= 'New Item!!'
//     document.getElementById('list').appendChild(item)
//  }


// const list = document.createElement('ul')
// list.setAttribute('id','list')
// list.setAttribute('onClick','addItem()')
// document.getElementById('sub-header').appendChild(list)


// const item1 = document.createElement('li')
// list.setAttribute('class','item')
// item1.innerHTML= 'Starter item'
// document.getElementById('list').appendChild(item1)

// const item2 = document.createElement('li')
// list.setAttribute('class','item')
// item2.innerHTML= 'Click Us!'
// document.getElementById('list').appendChild(item2)












