
// position of the labels 
const inputs = document.getElementsByTagName("input")
console.log(inputs)

for (let x of inputs) {
    if(x.id!='bday') {
    x.style.position='absolute'
    x.style.left= '20px'
    }
}


//function that handles the errors
const printError = function(text) {
    const err = document.createElement('h1')
    err.style.position='relative'
    err.style.left = '20px'
    err.innerHTML = text
    err.style.color = 'Red'
    err.style.fontSize = 'small'
    document.getElementById('container').appendChild(err)
}


//function which checks is an error occured 
const validate = function() {
    let name = document.getElementById('name').value
    let salary = document.getElementById('salary').value
    let phone = document.getElementById('phone').value
    let birthday = document.getElementById('bday').value
    let errFlag = 0
    //check name
    if(!name) {printError('Name is missing')
    errFlag++
    } else {
        if(name.length<=2) {printError('Name must be longer than 2 characters')
        errFlag++
    }
    }
    //check salary
    if(!salary) {printError('Salary is missing')
    errFlag++}
    else {
        if(salary>=16000 || salary<=10000) {printError('Salary must be greater than 10,000 but less than 16,000')
        errFlag++}
    }
    //check phone
    if(!phone) {printError('Phone is missing')
    errFlag++
    } else {
        if(phone.length!=10) {printError('Phone must be 10 digits long')
        errFlag++}
    }

    //check bday
    if(!birthday) {printError('Birthday is missing')
    errFlag++
    }
    if(errFlag===0) {
        document.getElementById('bday').style.display = 'none'
        document.getElementById('name').style.display = 'none'
        document.getElementById('but').style.display = 'none'
        document.getElementById('phone').style.display = 'none'
        document.getElementById('salary').style.display = 'none'
        let labels = document.getElementsByClassName('header')
        for(let x of labels){
            x.style.display = 'none'
        }
        document.getElementById('uniq').style.display = 'none'
        const welcome = document.createElement('h1')
        welcome.style.position='absolute'
        welcome.style.left = '50px'
        welcome.style.top = '150px'
        welcome.innerHTML = 'Welcome ' + name
        welcome.style.color = 'Red'
        welcome.style.fontSize = 'xx-large'
        document.getElementById('container').appendChild(welcome)
    }
}


//button
const button = document.getElementById('but')
button.setAttribute('onclick','validate()')        


