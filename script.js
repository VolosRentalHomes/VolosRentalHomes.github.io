// Initialize i18next with HTTP Backend
i18next
  .use(i18nextHttpBackend)
  .init({
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to JSON translation files
    },
  }, function(err, t) {
    if (err) return console.error("Error initializing i18next:", err);
    updateContent(); // Update content after initialization
  });

// Function to update content dynamically
function updateContent() {
  document.getElementById("nav-listings").textContent = i18next.t("nav.listings");
  document.getElementById("nav-blog").textContent = i18next.t("nav.blog");
  document.getElementById("nav-contact").textContent = i18next.t("nav.contact");
  document.getElementById("content-welcome").textContent = i18next.t("content.welcome");
}

// Event listener for language selection
document.getElementById("languageSelector").addEventListener("change", function(event) {
  const selectedLang = event.target.value;
  i18next.changeLanguage(selectedLang, updateContent);
});
