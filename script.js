// Smooth Scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Page Fade In
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// 🔥 LIGHT GSAP (Hero only)
gsap.from(".hero-title", {
  y: -40,
  opacity: 0,
  duration: 0.8
});

gsap.from(".hero-subtitle", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.3
});

gsap.from(".hero-buttons a", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  delay: 0.6,
  stagger: 0.15
});

// Keep original validation logic
function validateForm(email, password) {
  if (!email || !password) {
    alert("Please fill all fields");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  return true;
}
