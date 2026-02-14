console.log("Hi mannona , it is working !")


document.addEventListener("DOMContentLoaded", function () {

  let loginform = document.querySelector('.login-form');
  let signupform = document.querySelector('.signup-form');

  document.querySelector('#login-icon').onclick = () => {
    loginform.classList.toggle('active');
  };

  document.querySelector('#close-btn').onclick = () => {
    loginform.classList.remove('active');
  };

  document.querySelector('.signup-btn').onclick = (e) => {
    e.preventDefault();
    loginform.classList.remove('active');
    signupform.classList.add('active');
  };

  document.querySelector('#close-btn2').onclick = () => {
    signupform.classList.remove('active');
  };

  const menuIcon = document.querySelector('#menu-icon');
  const sidebar = document.querySelector('.slider');

  if (menuIcon && sidebar) {
    menuIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });
  } else {
    console.error("❌ sidebar أو menu-icon مش موجودين في الصفحة");
  }

});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".container");
  const pages = document.querySelectorAll(".section-page");
  const body = document.body;

  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      // لو الضغط حصل على زرار جوه الكارد → نوقف الحدث
      if (e.target.closest(".catbtn")) return;

      const target = card.getAttribute("data-target");
      const section = document.querySelector("." + target);

      if (section) {
        pages.forEach(p => p.classList.remove("active"));
        section.classList.add("active");
        body.classList.add("show-section");
      }
    });
  });

  const closeBtns = document.querySelectorAll(".close-btn");
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.remove("active");
      body.classList.remove("show-section");
    });
  });
});

document.addEventListener("click", function(e) {
  const btn = e.target.closest(".catbtn button");
  if (btn) {
    e.stopPropagation(); // 🔥 أهم سطر — يمنع الكارد من معرفة إن فيه كليك
    e.preventDefault();

    if (!btn.classList.contains("pending")) {
      btn.classList.add("pending");
      btn.style.backgroundColor = "#888";
      btn.style.cursor = "not-allowed";
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-regular fa-clock"></i> Pending';
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberMe = document.getElementById("remember");

  if (!loginForm) return; // نشتغل بس لو فعلاً في فورم لوجين

  // تسجيل الدخول
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "admin@library.com" && password === "admin123") {
      localStorage.setItem("userRole", "admin");
      if (rememberMe?.checked) localStorage.setItem("rememberEmail", email);
      window.location.href = "index.html"; // تحويل للأدمن
      return;
    }

if (email === "user@library.com" && password === "user123") {
  localStorage.setItem("userRole", "user");
  if (rememberMe?.checked) localStorage.setItem("rememberEmail", email);
  window.location.href = "BookShop.html"; // تحويل مباشر لصفحة المستخدم
  return;
}



    alert("Invalid email or password!");
  });

  const savedEmail = localStorage.getItem("rememberEmail");
  if (savedEmail && emailInput) emailInput.value = savedEmail;
});


document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("userRole");
  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "index.html" && role !== "admin") {
    alert("Access denied! Admins only.");
    window.location.href = "BookShop.html";
  }
});


// 🚪 تسجيل الخروج (يمكن استدعاؤه بزر)
function logout() {
  localStorage.removeItem("userRole");
  localStorage.removeItem("rememberEmail");
  window.location.href = "BookShop.html";
}
// 📬 Newsletter Subscription
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input').value;
  if (email) {
    console.log(`Subscribed: ${email}`);
    newsletterForm.reset();
  }
});
// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 200;
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 15);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
// Scroll reveal
const faders = document.querySelectorAll('.fade-in-up');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });
const accBtns = document.querySelectorAll('.accordion-btn');
accBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const authorCards = document.querySelectorAll('.author-card');

  function animateAuthors() {
    const triggerBottom = window.innerHeight * 0.85;

    authorCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if(cardTop < triggerBottom) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', animateAuthors);
  animateAuthors(); // يظهر على التحميل مباشرة
});

