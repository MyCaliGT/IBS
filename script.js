/*Header Fijo*/
const header = document.querySelector('Header')

window.addEventListener('scroll', function(){
    var scroll = window.scrollY;
    if(scrollY>0){
        header.style.backgroundColor = 'rgba(22,22,22)';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})

/*Header Responsive*/
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", ()  =>{
    
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
});

/*Slider*/
const imgArray = [
    './Assets/imagen1.jpg',
    './Assets/imagen2.jpg',
    './Assets/imagen3.jpg',
    './Assets/imagen4.jpg'
]
    
const img = document.querySelector('#slide-img')
    
let i = 0;
    
const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.length - 1 ) ? i + 1 : 0
}
    
const interval = () =>{
    setInterval(slideShow, 5000)
}