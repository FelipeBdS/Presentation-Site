
  
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  let button3 = document.getElementById("button3");
  let button4 = document.getElementById("button4");

  button1.addEventListener("click", function() {
    openImage("Certificados/HTML5-1.jpg");
  });

  button2.addEventListener("click", function() {
    openImage("./Certificados/CSS3-1.jpg");
  });

  button3.addEventListener("click", function() {
    openImage("./Certificados/JS-1.jpg");
  });

  button4.addEventListener("click", function() {
    openImage("./Certificados/JSDOM-1.jpg");
  });
  
  button5.addEventListener("click", function() {
    openImage("./Certificados/CertificadoXP.jpg");
  });

  function openImage(imgPath) {
    var modal = document.getElementById("imagemModal");
    var img = document.getElementById("imagem");
    modal.style.display = "block";
    img.src = imgPath;
  }

  function closeImage() {
    var modal = document.getElementById("imagemModal");
    modal.style.display = "none";
  }