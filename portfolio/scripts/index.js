const navbar=window.document.querySelector('.navbar');
const mobileNavbar=window.document.querySelector('.navbar_mobile');
const button=window.document.querySelector('.burguer');

button.addEventListener('click', function() {
    mobileNavbar.classList.toggle('active');
})

window.addEventListener('scroll', function() {
    if (this.pageYOffset>0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
})