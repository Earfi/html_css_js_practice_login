const open_nav = document.getElementById('open-nav');
const close_nav = document.getElementById('close-nav');
const close_form = document.getElementById('close-form');
const nav_item = document.getElementById('nav-item');
const profile_nav = document.getElementById('profile-nav')

const main = document.getElementById('main');
const login = document.getElementById('login');

const go_register = document.getElementById('go-register');
const go_login = document.getElementById('go-login');

const register_form = document.getElementById('register-form');
const login_form = document.getElementById('login-form');


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

if(go_register){
    go_register.addEventListener('click',()=>{
        login.classList.add('register')
        login_form.style.display = 'none';
        register_form.style.display = 'block';
    })
}

if(go_login){
    go_login.addEventListener('click',()=>{
        login.classList.remove('register')
        register_form.style.display = 'none';
        login_form.style.display = '';
    })
}
var icons_lock = document.querySelectorAll('.ri-lock-line');
var icons_un_lock = document.querySelectorAll('.ri-lock-unlock-line');
var inputFields = document.querySelectorAll('.input_password');

if (icons_lock && icons_un_lock) {
  for (var i = 0; i < icons_lock.length; i++) {
    icons_lock[i].addEventListener('click', function(event) {
      var clickedIconPassword = event.target;
      var parentDiv = clickedIconPassword.parentNode.parentNode;
      var inputField = parentDiv.querySelector('.input_password');

      if (inputField.type === 'password') {
        inputField.type = 'text';
        icons_lock[i].classList.add('hide-icon');
        icons_un_lock[i].classList.remove('hide-icon');
        icons_un_lock[i].classList.add('show-icon');
      } else {
        inputField.type = 'password';
        icons_lock[i].classList.remove('hide-icon');
        icons_lock[i].classList.add('show-icon');
        icons_un_lock[i].classList.add('hide-icon');
      }
    });

    icons_un_lock[i].addEventListener('click', function(event) {
      var clickedIconPassword = event.target;
      var parentDiv = clickedIconPassword.parentNode.parentNode;
      var inputField = parentDiv.querySelector('.input_password');

      if (inputField.type === 'text') {
        inputField.type = 'password';
        icons_lock[i].classList.remove('hide-icon');
        icons_lock[i].classList.add('show-icon');
        icons_un_lock[i].classList.add('hide-icon');
      } else {
        inputField.type = 'text';
        icons_lock[i].classList.add('hide-icon');
        icons_un_lock[i].classList.remove('hide-icon');
        icons_un_lock[i].classList.add('show-icon');
      }
    });
  }
}
