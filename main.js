const menubtn = document.querySelector('.menubtn')
const navigation = document.querySelector('.navigation')


menubtn.addEventListener('click', ()=>{
  if(menubtn.name === 'menu'){
    menubtn.name = 'close'
  }
  else{
    menubtn.name = 'menu'
  }
  navigation.classList.toggle('h-0')
  navigation.classList.toggle('h-[92%]')
})