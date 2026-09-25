// ===============================
// AI-App - JavaScript
// ===============================

// منوی موبایل
function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    if (menu) {
        menu.classList.toggle("active");
    }
}

// بستن منو بعد از کلیک روی لینک
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".nav-links");

        if (menu) {
            menu.classList.remove("active");
        }
    });
});


// دکمه «شروع کنیم»
function startProject() {
    showNotification("🚀 آماده‌ای؟ پروژه هوشمندت رو شروع کن!");

    setTimeout(() => {
        document.querySelector("#features")?.scrollIntoView({
            behavior: "smooth"
        });
    }, 500);
}


// دکمه «بیشتر بدانید»
function showInfo() {
    showNotification("🤖 این سایت برای ساخت تجربه‌های هوشمند طراحی شده!");
    
    setTimeout(() => {
        document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth"
        });
    }, 500);
}


// اعلان خفن
function showNotification(message) {
    let notification = document.querySelector(".ai-notification");

    if (!notification) {
        notification = document.createElement("div");
        notification.className = "ai-notification";

        notification.style.position = "fixed";
        notification.style.bottom = "25px";
        notification.style.left = "50%";
        notification.style.transform = "translateX(-50%)";
        notification.style.padding = "14px 22px";
        notification.style.background = "rgba(20, 20, 35, 0.95)";
        notification.style.color = "#fff";
        notification.style.border = "1px solid rgba(0, 255, 255, 0.5)";
        notification.style.borderRadius = "15px";
        notification.style.boxShadow = "0 0 25px rgba(0, 255, 255, 0.25)";
        notification.style.zIndex = "9999";
        notification.style.fontSize = "15px";
        notification.style.opacity = "0";
        notification.style.transition = "0.3s";

        document.body.appendChild(notification);
    }

    notification.textContent = message;
    notification.style.opacity = "1";

    setTimeout(() => {
        notification.style.opacity = "0";
    }, 2500);
}


// انیمیشن ظاهر شدن کارت‌ها هنگام اسکرول
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".feature-card, .about-content, .ai-card").forEach(
    (element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);
    }
);


// افکت هنگام اسکرول
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 20, 0.95)";
        navbar.style.backdropFilter = "blur(15px)";
    } else {
        navbar.style.background = "";
        navbar.style.backdropFilter = "";
    }
});


// پیام شروع سایت
window.addEventListener("load", () => {
    console.log("🤖 AI-App با موفقیت اجرا شد!");
});
