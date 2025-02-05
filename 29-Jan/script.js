// Function to download the resume as a PDF
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Kartik_Dua_Resume.pdf'; // Path to your resume file
    link.download = 'Kartik_Dua_Resume.pdf';
    link.click();
}

// Theme toggle function
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? '🌙 Dark Mode' : '☀️ Light Mode';
    themeToggleButton.textContent = currentMode;
});
