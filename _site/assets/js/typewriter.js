document.addEventListener('DOMContentLoaded', function() {
  const el = document.getElementById('hero-typewriter');
  if (!el) return;
  const text = 'Join the\nhitchhiking\nrevolution.';

  function typeWriterEffect(str, callback) {
    el.innerHTML = '';
    let i = 0;
    function type() {
      if (i < str.length) {
        if (str.charAt(i) === '\n') {
          el.innerHTML += '<br>';
        } else {
          el.innerHTML += str.charAt(i);
        }
        i++;
        setTimeout(type, 60);
      } else if (callback) {
        setTimeout(callback, 1000);
      }
    }
    type();
  }

  function deleteEffect(callback) {
    let html = el.innerHTML.replace(/<br>/g, '\n');
    let i = html.length;
    function del() {
      if (i > 0) {
        html = html.slice(0, i - 1);
        el.innerHTML = html.replace(/\n/g, '<br>');
        i--;
        setTimeout(del, 30);
      } else if (callback) {
        setTimeout(callback, 400);
      }
    }
    del();
  }

  function loop() {
    typeWriterEffect(text, function() {
      setTimeout(function() {
        deleteEffect(function() {
          setTimeout(loop, 400);
        });
      }, 2500);
    });
  }

  loop();
}); 