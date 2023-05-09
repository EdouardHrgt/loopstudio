const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const filter = document.querySelector('.filter').style
const nav = document.querySelector('.header-nav').style

openMenu.addEventListener('click', () => {
  openMenu.classList.remove('active')
  closeMenu.classList.add('active')
  nav.display = 'block'
  filter.display = 'block'
})

closeMenu.addEventListener('click', () => {
  openMenu.classList.add('active')
  closeMenu.classList.remove('active')
  nav.display = 'none'
  filter.display = 'none'
})
