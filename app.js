var vid = document.querySelector('#bgvid');
var playVid = function() {
  vid.play();
}

window.onload = playVid;

var myText = document.querySelector('.body');
myText.addEventListener('click', function() {
  fetch('index2.html')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('article').innerHTML = data;
      // setYes()
      setNo()
    })
    .catch((err) => console.log(err))
});


function setNo() {
  var no = document.querySelector('.answerNo');

  no.addEventListener('click', function() {
    var myText = document.querySelector('.body');
    myText.addEventListener('click', function() {
      fetch('index4.html')
        .then((res) => res.text())
        .then((data) => {
          document.getElementById('article').innerHTML = data;
        })
        .catch((err) => console.log(err))
    });
  });
}
