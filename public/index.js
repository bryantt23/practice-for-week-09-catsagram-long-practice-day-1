// Your code here

window.onload = async () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Kitten Pic';
  addToDom(h1);
  const img = document.createElement('img');
  img.src = await getCat();
  addToDom(img);
};

function addToDom(element) {
  document.body.appendChild(element);
}

async function getCat() {
  const randomCatUrl = 'https://api.thecatapi.com/v1/images/search';

  const cat = await fetch(randomCatUrl);
  const res = await cat.json();
  return res[0]['url'];
}
