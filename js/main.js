var timer = document.querySelector('.timer');
var inject = document.querySelector('.inject-text');
var text = document.querySelector('.text');
var inputBox = document.querySelector('.box');
var complete = document.querySelector('.complete');

  var seconds ='0' + 0;
  var minutes = 25;

  timer.innerHTML = minutes + ':' + seconds;
  var input = document.querySelector('.btn');
  input.addEventListener('click', function(){

    if(text.value === ''){
      alert('Enter a task below to start the timer!');
      return;
    }

    inject.innerHTML = text.value;
    text.value = '';
    inputBox.className = 'box disappear';

      var count = setInterval( function(){

        seconds--;

        if(seconds < 0){
          seconds = 59;
          minutes --;
        }

        if(seconds < 10){
          seconds = '0' + seconds;
        }

        if(minutes === 0 && seconds === '00'){
          window.clearInterval(count);
          timer.className = 'timer disappear';
          inject.className = 'inject-text disappear';
          complete.className = 'complete';
        }

      timer.innerHTML = minutes + ':' + seconds;

    }, 1000);
})
