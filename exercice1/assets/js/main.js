document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
  });


  /* let p = document.createElement('p');
  p.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(p).classlist.add('arrowUp');
  function scrollUp(){
    top: 0;
    left: 0;
    behavior: 'smooth';
  }
