const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');
const heroimage = document.getElementById('heropic');
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  const { text } = await( await fetch(`/api/message?name=santhoshkaushik&ID=123`)).json();
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadingtext").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.querySelector('#name').textContent = text;
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
    myHeading.textContent = 'Welcome to Kaushik Page .... ';
  } else {
    myImage.setAttribute('src','mypic.jpg');
    heroimage.setAttribute('src','mypic.jpg');
    myHeading.textContent = 'Welcome to My Page .... ';
  }
}
