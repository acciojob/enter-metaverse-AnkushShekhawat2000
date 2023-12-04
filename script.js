
document.querySelector('#enter-btn').addEventListener('click', function () {
  let para = document.querySelector('#status');
  let heading = document.createElement('h1');
  heading.innerText = 'Entered Metaverse';
  para.innerText = '';
  para.appendChild(heading);
});