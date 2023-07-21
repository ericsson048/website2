const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');
const btngallery = document.querySelector('.btngallery');
const gallery1 = document.querySelector('.gallery1');
const iconclose2 = document.querySelector('.icon-close2');


registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})
loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
})
iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
})

btngallery.addEventListener('click',()=> {
    gallery1.classList.add('activegal');
})
iconclose2.addEventListener('click',()=> {
    gallery1.classList.remove('activegal');
})

