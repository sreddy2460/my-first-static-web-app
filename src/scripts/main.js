const myHeading = document.querySelector('h2');
const myImage = document.querySelector('img');
const heroimage = document.getElementById('heropic');
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

async function myazureapi() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get('name');
  const { text } = await( await fetch(`https://santhosh-fn-app.azurewebsites.net/api/message?name=${name}&ID=123`)).json();
  document.querySelector('#name').textContent = text;
}

myazureapi();

function showPage() {
  
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadingtext").style.display = "none";
  document.getElementById("myDiv").style.display = "block";

}

function myFunction2() {
  document.querySelector('#name').textContent = "is it here " ;
}


myHeading.textContent = 'Welcome to my page ';
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'mypic.jpg') {
    myImage.setAttribute('src','myimg2.jpg');
    heroimage.setAttribute('src','myimg2.jpg');
    myHeading.textContent = 'Welcome ....  Kaushik  ';
  } else {
    myImage.setAttribute('src','mypic.jpg');
    heroimage.setAttribute('src','mypic.jpg');
    myHeading.textContent = 'Welcome to Santhosh .... ';
  }
}
