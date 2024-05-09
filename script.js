function scrollToElement (elementSelector, instance = 0) {
    const element = document.querySelectorAll(elementSelector)
    if (element.length > 0) {
        element[instance].scrollIntoView({behavior: 'smooth'})
    }
}

const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('scrollToBottom')

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header',1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link4.addEventListener('click', () => {
    scrollToElement('.column');
})