// SmoothScrool
export default function initScrollSuave () {
    const linksInternos = document.querySelectorAll('.item')

    const scrollToSection = event => {
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

