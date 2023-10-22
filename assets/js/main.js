 function loading() {
    var cacheBuster = new Date().getTime(); // Generate a cache-busting parameter based on the current time
    var preloading = document.getElementById('preloading');
    preloading.style.display = 'none';
    preloading.style.background = 'url("../images/ice-cream.gif?' + cacheBuster + '")'; // Add the cache-busting parameter to the URL of the preloading image
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
  }


  window.addEventListener("scroll", function () {
  var columns = document.querySelectorAll(".image-container");

  columns.forEach(function (column) {
    var images = column.querySelectorAll(".whatwedo-img");

    images.forEach(function (image) {
      var imagePosition = image.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.2;

      if (imagePosition < screenPosition) {
        image.classList.add("custom-animation");
      } 
      else {
        image.classList.remove("custom-animation");
      }

    });

  });

});