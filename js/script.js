// SmoothScrool
initScrollSuave = () => {
    const linksInternos = document.querySelectorAll('.item')

    scrollToSection = event => {
        event.preventDefault()
        const href = event.target.getAttribute('href')
        const section = document.querySelector(href)
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    }
    linksInternos.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave()




const arrowUp = document.querySelector('.arrow-up')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 560){
        arrowUp.classList.add('show')
    } else {
        arrowUp.classList.remove('show')
    }
})