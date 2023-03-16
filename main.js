let info = document.querySelector('.item');



function myDisplay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(document.querySelector('.item').classList.add('anim'));
    }, 2000);
  });
}

myDisplay();