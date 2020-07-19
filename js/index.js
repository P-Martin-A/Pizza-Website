const menu = document.querySelector('#menu')
const navigation = document.querySelector('#navigation')
const removeMenu = document.querySelector('#closed')

menu.addEventListener('click', ()=>{
    navigation.classList.add('nav')
    navigation.setAttribute('style', 'width: 25%')
})

removeMenu.addEventListener('click', ()=>{
    navigation.classList.remove('nav')
    navigation.removeAttribute('style')
})