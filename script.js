// Smooth Scroll (optional future use)
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

// Simple animation on load
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Basic form validation example
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
