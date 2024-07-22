document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.querySelector(
    '.switch input[type="checkbox"]'
  );
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const backToTopButton = document.getElementById("backToTop");
  const loginForm = document.getElementById("loginForm");

  // Přepínač tmavého režimu
  themeSwitcher.addEventListener("change", function () {
    if (this.checked) {
      body.setAttribute("data-theme", "dark");
    } else {
      body.removeAttribute("data-theme");
    }
  });

  // Přepínač mobilního menu
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Tlačítko pro návrat na začátek
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Validace formuláře
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password-confirm").value;

    if (password !== confirmPassword) {
      alert("Hesla se neshodují!");
    } else {
      alert("Přihlášení bylo úspěšné!");
    }
  });
});
