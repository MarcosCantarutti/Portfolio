//reveal arrow up to top page
export default  function arrowUpFunc () {
    const arrowUp = document.querySelector('.arrow-up')
    window.addEventListener('scroll', () => {
    if(window.scrollY >= 560){
        arrowUp.classList.add('show')
    } else {
        arrowUp.classList.remove('show')
    }
})
}