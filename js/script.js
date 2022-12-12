// const drk = document.querySelector('.dark-mode')
// const icon = document.querySelector('.icon')
// const tombol = icon.src= '../images/light.png'

// drk.addEventListener('click',function(){
//     icon.src.toggle= '../images/light.png'
// })

var profile = document.querySelector('.wrapper_profile')
var darkmode = document.querySelector('#dark-change')

darkmode.addEventListener('click', function(){
    // label.classList.toggle('active')
    darkmode.classList.toggle('active')
    profile.classList.toggle('night')
})

