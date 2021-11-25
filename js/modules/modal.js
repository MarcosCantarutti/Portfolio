// contact Email Modal
export default function callModal () {
    const buttonClose = document.querySelector('[data-close="modal"]');
    const buttonForm = document.querySelector('[data-mail="email"]');
    const buttonSubmit = document.querySelector('[data-button="button"]');
    const containerModal = document.querySelector('[data-modal="container"]')
    
    const toggleModal = event => {
        event.preventDefault()
        containerModal.classList.toggle('active')
    }
    
    const clickOutModal = event => {
       const clickedElement = event.target
       clickedElement === containerModal || clickedElement === buttonSubmit  ? toggleModal(event) : null
    }
    
    const callSubmit = event => {
        window.alert('Enviado! ')
    }
    
    buttonClose.addEventListener('click', toggleModal)
    buttonForm.addEventListener('click', toggleModal)
    buttonSubmit.addEventListener('click', callSubmit)
    containerModal.addEventListener('click', clickOutModal)
}

