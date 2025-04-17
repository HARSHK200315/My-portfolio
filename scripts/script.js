// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// typewritter effect
function initTypewriter() {
    const elements = document.querySelectorAll('.typewriter');

    elements.forEach(el => {
        const text = el.dataset.text || el.textContent;
        el.textContent = ''; // Clear existing text
        el.dataset.text = text; // Store original text
        let i = 0;

        // Create cursor element
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        el.appendChild(cursor);

        function type() {
            if (i < text.length) {
                el.insertBefore(document.createTextNode(text[i]), cursor);
                i++;
                setTimeout(type, 100);
            }
        }

        type();
    });
}

window.addEventListener('DOMContentLoaded', initTypewriter);

// toggle dark theme
const toggleSwitch = document.getElementById('toggle-switch');

  toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    
    // Optional: Save user preference
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load saved theme on reload
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      toggleSwitch.checked = true;
    }
  });
