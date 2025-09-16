

document.addEventListener('DOMContentLoaded', function(){
 
  const y = new Date().getFullYear();
  document.getElementById('year').innerText = y;


  const mobileToggle = document.getElementById('mobile-toggle');
  mobileToggle && mobileToggle.addEventListener('click', function(){
    const nav = document.querySelector('.nav');
    if(!nav) return;
    nav.style.display = (nav.style.display === 'flex') ? '' : 'flex';
    nav.style.flexDirection = 'row';
  });


  const quizBtn = document.getElementById('quiz-submit');
  quizBtn && quizBtn.addEventListener('click', function(){
    const radios = document.querySelectorAll('input[name="java"]');
    let selected = null;
    radios.forEach(r => { if(r.checked) selected = r.value; });
    if(!selected){
      alert('Por favor, escolha uma opção no quiz.');
      return;
    }
   
    let msg = '';
    if(selected === 'none') msg = 'Recomendamos começar por fundamentos de Java e estruturação orientada a objetos.';
    if(selected === 'intermediate') msg = 'Ótimo! Siga para Spring Boot e testes automatizados.';
    if(selected === 'advanced') msg = 'Você pode focar em arquitetura de microsserviços e performance.';
    alert('Resultado do quiz: ' + msg);
  });


  const startBtns = document.querySelectorAll('#start-btn, #cta-start, #btn-signup');
  startBtns.forEach(b => b.addEventListener('click', function(){
    alert('Abrir formulário de cadastro (placeholder).');
  }));

});
