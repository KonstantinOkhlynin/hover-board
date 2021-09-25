const board = document.querySelector('#board')
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    board.append(square)
}

function setColor (el) {
 el.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
 el.style.boxShadow = '0 0 2px #' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase() + ', 0 0 10px #' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
 setTimeout(() => {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000'
 }, 500)
}

