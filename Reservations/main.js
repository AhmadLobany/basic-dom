const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }


const input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('id','input')
input.setAttribute('placeholder','Who are you?')
document.body.prepend(input)

const but = document.createElement('button')
but.setAttribute('type','button')
but.setAttribute('id','button')
but.innerHTML = 'Check Reservation'
but.onclick = function () {
        const name = input.value
        if(reservations[name]==undefined) {
            list.innerHTML = 'You do not seem to have an reservation, ' + name 
        } else  {
            list.innerHTML = 'Welcome,' + name 
        }
}
document.body.appendChild(but)

const list = document.createElement('div')
list.setAttribute('id','text')
document.body.appendChild(list)