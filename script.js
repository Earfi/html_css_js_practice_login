const open_nav = document.getElementById('open-nav');
const close_nav = document.getElementById('close-nav');
const close_form = document.getElementById('close-form');
const nav_item = document.getElementById('nav-item');
const profile_nav = document.getElementById('profile-nav')

const main = document.getElementById('main');
const login = document.getElementById('login');



if(open_nav){
    open_nav.addEventListener('click',()=>{
        nav_item.classList.add('nav_active')
        main.classList.add('main_not_active')
        document.body.style.backdropFilter = 'blur(24px)';
    })
}


if(close_nav){
    close_nav.addEventListener('click',()=>{
        nav_item.classList.remove('nav_active')
        main.classList.remove('main_not_active')
        document.body.style.backdropFilter = 'none';
    })
}

if(profile_nav){
    profile_nav.addEventListener('click',()=>{
        login.classList.add('login_active')
    })
}

if(close_form){
    close_form.addEventListener('click',()=>{
        login.classList.remove('login_active')
    })
}



// .style.backgroundColor =