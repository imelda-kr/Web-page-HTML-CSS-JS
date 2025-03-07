function on() {
    document.getElementsByClassName(".overlay").style.display = "block"
    innerWidth = 50;
  }
  
  function off() {
    document.getElementsByClassName(".overlay").style.display = "none";
  }


  function myFunction(x) {
    x.classList.toggle(".active");
  }