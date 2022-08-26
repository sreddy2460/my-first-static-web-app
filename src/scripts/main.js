const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');

myHeading.textContent = 'Welcome to Santhosh World .... ';
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'mypic.jpg') {
    myImage.setAttribute('src','myimg2.jpg');
    myHeading.textContent = 'Welcome to Kaushik World .... ';
  } else {
    myImage.setAttribute('src','mypic.jpg');
    myHeading.textContent = 'Welcome to Santhosh World .... ';
  }
}
