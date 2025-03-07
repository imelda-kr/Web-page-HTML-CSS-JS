
function openNav() {
    document.getElementById("myNav").style.width = "100%";

};

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};

(function () {
    var toggle = document.querySelector('.hamburger-menu');
    
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('active');      
    });
  })();