window.onload = () => {
    const formButton = document.querySelector(".cta__form-btn");
    const container = document.querySelector(".email-modal__thankyou");
    const closeButton = document.querySelector(".email-modal__close-btn");
    const modal = document.querySelector(".email-modal");
    const declineLink = document.querySelector(".decline-link");
    const input = document.querySelector(".cta__form-input");
    const errorMessage = document.querySelector(".cta__error-message");
    const form = document.querySelector(".cta__form");
    let emailState = false;

    function showErrorMessage() {
        errorMessage.classList.add("cta__error-message--active");
        form.classList.add("cta__form--error");
    };

    function closeModal() {
        modal.classList.remove("email-modal--visible");
    };

    function showModal() {
        modal.classList.add("email-modal--visible");
    }

    function showThanks() {
        container.classList.add("email-thank__success");
    };

    function isEmailValid(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    };

    formButton.addEventListener("click", () => {
        if(isEmailValid(input.value)) {
            console.log(input.value);
            showThanks();
        }
        else {
            showErrorMessage();
        }
    });
    
    closeButton.addEventListener("click", () => {
        closeModal();
    });
    
    declineLink.addEventListener("click", () => {
        closeModal()
    });

    document.body.addEventListener("mouseleave", () => {
        if(emailState == false) {
            showModal();
            emailState = true;
        }
    });
};