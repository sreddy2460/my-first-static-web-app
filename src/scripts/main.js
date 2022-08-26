const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');

myHeading.textContent = 'Hello world Santhosh in JS!';
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'myimg.jpg') {
    myImage.setAttribute('src','myimg2.jpg');
  } else {
    myImage.setAttribute('src','myimg.jpg);
  }
}
