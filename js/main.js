const mobileMenuToggleBtn = document.querySelector('#menu_toggle_btn')
const mobileMenuContentContainer = document.querySelector('.mobile-menu-content-container')
const mobileMenuSocialsContainer = document.querySelector('.socials-container')

// EVENTLISTENERS //
mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu()
{
    mobileMenuToggleBtn.classList.toggle('active')
    mobileMenuContentContainer.classList.toggle('active')
    mobileMenuSocialsContainer.classList.toggle('active')
}