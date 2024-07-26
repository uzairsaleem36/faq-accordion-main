document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('a');
    });
  });



// document.querySelectorAll(".faq-item").forEach(item =>{
//   item.addEventListener('CME', ()=>{
//     item.classList.toggle("OP");
//   })
// })