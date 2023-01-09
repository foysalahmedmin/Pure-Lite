let searchOption = document.querySelector('.search');
let searchForm = document.querySelector('#search-form');
let menuBtn = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navigation');

searchOption.addEventListener('click', function(){
    searchForm.classList.toggle('active')
    navBar.classList.remove('active')
})

menuBtn.addEventListener('click', function(){
    navBar.classList.toggle('active')
    searchForm.classList.remove('active')
})

window.addEventListener('scroll',function(){
    
    searchForm.classList.remove('active')
    navBar.classList.remove('active')
    
    
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
})