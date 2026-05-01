
let links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{
  link.addEventListener("click",function(){
    
    links.forEach(item=>{
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});






// Skill Animation on Scroll

let skillBars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
    skillBars.forEach(bar => {
        bar.style.width = bar.classList.contains("html") ? "95%" :
                          bar.classList.contains("css") ? "90%" :
                          bar.classList.contains("js") ? "85%" :
                          bar.classList.contains("uiux") ? "88%" :
                          bar.classList.contains("figma") ? "80%" :
                          "92%";
    });
});


// Projects Fade Animation

let projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    projectCards.forEach((card, index) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.style.transition = `0.6s ease ${index * 0.2}s`;
    });
});


// Certificates Animation

let certificateCards = document.querySelectorAll(".certificate-card");

window.addEventListener("scroll", () => {
    certificateCards.forEach((card, index) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.style.transition = `0.6s ease ${index * 0.2}s`;
    });
});



// Contact Form Submit

document.querySelector(".contact-form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();

});

document.querySelector(".yellow-btn").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/lokeshloki15", "_blank");
});



const text = "Frontend Developer & UI/UX Designer";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      document.getElementById("tagline").textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100); 
    }
  }

  window.onload = typeEffect;



function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_eduk619', 'template_9010qvh', this)
        .then(function() {
            document.getElementById('success-msg').style.display = 'block';
            document.getElementById('contact-form').reset();
            setTimeout(function() {
                document.getElementById('success-msg').style.display = 'none';
            }, 4000);
        }, function(error) {
            alert('❌ Failed! Try again.');
        });
});