const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', ()=>{
  const trigger = window.innerHeight * 0.8;

  boxes.forEach(box=>{
    const top = box.getBoundingClientRect().top;
    if(top < trigger){
      box.classList.add('show');
    }
  });
});
