let mainFrame = document.querySelector('.main')

let openClose = document.querySelector('.d')

openClose.addEventListener('click', () => {
    mainFrame.classList.toggle('active')
})