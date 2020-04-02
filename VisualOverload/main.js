const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }

  const colors = []


const checkSame = function() {
    let color = colors[0]
    for(let i in colors) {
        if (colors[i]!=color) return
    }
    const win = document.createElement('h1')
    win.innerHTML='Nice Job!'
    win.style.fontSize = 'x-large'
    win.style.position = 'absolute'
    win.style.bottom = 0
    win.style.left = '250px'
    win.style.color = 'Red'
    document.getElementById('container').appendChild(win)
}

let left = 0 
for(let i=0;i<6;i++) {
    const box = document.createElement('div')
    box.setAttribute('id','box' + i)
    box.setAttribute('class','box')
    box.setAttribute('onmouseenter',"changeColor(this,"+i+ ")")
    box.style.left += (left + 'px')
    left+=105 
    let color = getRandomColor() 
    colors[i] = color
    box.style.backgroundColor = color
    document.getElementById('container').appendChild(box)
}


const changeColor = function (box,i) {
    let color = getRandomColor()
    colors[i] = color
    box.style.backgroundColor = color
    checkSame()
}




