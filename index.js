window.onload = function() {
    document.querySelector('.harvest-h1').classList.add('show');
    document.querySelector('.harvest-text').classList.add('show');
  }


  const header = document.querySelector('header'),
	burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
	header.classList.toggle('active')
});