const menuBtn = document.querySelector("#menu");
    const navLinks = document.querySelector(".nav-links");
    const clickCheckbox = document.querySelector("#click");
    menuBtn.addEventListener("click", () => {
        // Toggle the 'active' class on the nav-links for mobile
        navLinks.classList.toggle("active");
        clickCheckbox.checked = !clickCheckbox.checked;
    });

    // Smooth Scroll for navigation links
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove # from href
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hire Me Button
    document.querySelector(".hire-me-btn").addEventListener("click", () => {
        alert("Thank you for showing interest! You can contact me at krishlaysharma3720@gmail.com.");
    });

    // Download CV Button
    document.querySelector(".btn2").addEventListener("click", (e) => {
        e.preventDefault();
        // Replace 'cv.pdf' with the actual path to your CV
        alert("Download initiated for Krishlay's CV.");
    });

    // Subscribe Button functionality
    const subscribeButton = document.querySelector(".contact-us-sec button");
    subscribeButton.addEventListener("click", (e) => {
        e.preventDefault();
        const emailInput = document.querySelector("#email-id").value;
        if (emailInput) {
            alert(`Thank you for subscribing with email: ${emailInput}`);
        } else {
            alert("Please enter a valid email.");
        }
    });

