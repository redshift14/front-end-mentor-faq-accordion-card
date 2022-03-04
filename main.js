const buttons = document.querySelectorAll('button');
const textContainers = document.querySelectorAll('.answer-container');
const texts = document.querySelectorAll('.question-text');
const leftCol = document.querySelector('.left-col');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        leftCol.classList.remove('special');
        let actualButton;
        if (e.target.nodeName === 'BUTTON') {
            actualButton = e.target;
        }
        else {
            actualButton = e.target.parentElement;
        }

        if (actualButton.classList.contains('rotate')) {
            actualButton.classList.remove('rotate');
            actualButton.parentElement.parentElement.children[1].classList.remove('show');
            actualButton.parentElement.parentElement.children[1].classList.remove('visiblyShow');
            actualButton.previousElementSibling.classList.remove('bold');
        }
        else {
            showAndHide(e.target);
        }
    })  
})

texts.forEach(text => {
    text.addEventListener('click', (e) => {
        if (window.innerWidth > 980) {
            leftCol.classList.remove('special');
        } 
        if (e.target.nextElementSibling.classList.contains('rotate')) {
            e.target.nextElementSibling.classList.remove('rotate');
            e.target.nextElementSibling.parentElement.parentElement.children[1].classList.remove('show');
            e.target.nextElementSibling.parentElement.parentElement.children[1].classList.remove('visiblyShow');
            e.target.nextElementSibling.previousElementSibling.classList.remove('bold');
        }
        else {
            showAndHide(e.target.nextElementSibling);
        }
    })
})

function showAndHide(targetElement) {
    texts.forEach(text => {
        text.classList.remove('bold');
    })

    buttons.forEach(btn => {
        btn.classList.remove('rotate');
    })

    textContainers.forEach(container => {
        if (container.classList.contains('visuallyShow')) {
            container.classList.remove('show');
            container.classList.remove('visuallyShow');
        }
    });

    let textContainer; 

    if (targetElement.nodeName === 'IMG') {
        textContainer = targetElement.parentElement.parentElement.parentElement.children[1];
        targetElement.parentElement.previousElementSibling.classList.add('bold');
        targetElement.parentElement.classList.add('rotate');
    }
    if (targetElement.nodeName === 'BUTTON') {
        textContainer = targetElement.parentElement.parentElement.children[1];
        targetElement.previousElementSibling.classList.add('bold');
        targetElement.classList.add('rotate');
    }

    if (window.innerWidth > 980) {
        leftCol.classList.add('special');
    }
    textContainer.classList.toggle('show');
    setTimeout(() => {
        textContainer.classList.add('visuallyShow');
    }, 20);
}

window.addEventListener('load', () => {
    if(window.innerWidth < 980) {
        image.setAttribute('src', './images/illustration-woman-online-mobile.svg');
    }
    else {
        image.setAttribute('src', './images/illustration-woman-online-desktop.svg');
    }
})

const image = document.querySelector('.illustration');
window.addEventListener('resize', () => {
    if (window.innerWidth < 980) {
        image.setAttribute('src', './images/illustration-woman-online-mobile.svg');
    }
    else {
        image.setAttribute('src', './images/illustration-woman-online-desktop.svg');
    }
})