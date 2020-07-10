let display = document.getElementById('display')
let buttons = document.querySelectorAll('button')
let screenValue = ''
for (item of buttons) {
    item.addEventListener('click', (e) => {

        buttonText = e.target.innerText
        console.log(buttonText);
        if (buttonText === 'C') {
            display.value = ""

            display.classList.add("start")

        }
        else if (buttonText === '÷') {
            buttonText = '/'
            display.value += buttonText
            display.classList.add("start")
        }
        else if (buttonText === '×') {
            buttonText = '*'
            display.value += buttonText
            display.classList.add("start")
        }
        else if (buttonText === '=') {
            buttonText = '*'
            display.value = eval(display.value)
            display.classList.remove("start")
            display.classList.add("end")

        }
        else {
            display.value += buttonText
            display.classList.add("start")
        }


    })
}