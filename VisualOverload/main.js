const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }


let left = 0 
for(let i=0;i<6;i++) {
    const box = document.createElement('div')
    box.setAttribute('id','box' + i)
    box.setAttribute('class','box')
    box.setAttribute('onmouseenter',"changeColor(this)")
    box.style.left += (left + 'px')
    left+=105 
    box.style.backgroundColor = getRandomColor();
    document.getElementById('container').appendChild(box)
}


const changeColor = function (box) {
    box.style.backgroundColor= getRandomColor()
}


