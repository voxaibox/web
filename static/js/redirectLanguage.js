function redirectToLanguage(language, manual = false) {
    const supportedLanguages = ["en", "fr"]; // Correspond aux langues définies dans languages.toml
    if (supportedLanguages.includes(language)) {
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.replace(/\/(en|fr)\//, "/").replace(/\/$/, ""); // Supprime la langue actuelle de l'URL
        const newUrl = `${baseUrl}/${language}/`; // Ajoute la nouvelle langue
        if (currentUrl !== newUrl) {
            if (manual) {
                localStorage.setItem("preferredLanguage", language); // Stocke la langue choisie manuellement
            }
            window.location.href = newUrl;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const storedLanguage = localStorage.getItem("preferredLanguage"); // Vérifie si une langue a été choisie manuellement
    const currentLanguage = document.documentElement.lang; // Langue actuelle de la page
    const userLanguage = storedLanguage || navigator.language.slice(0, 2); // Utilise la langue stockée ou celle du navigateur

    // Redirige uniquement si la langue actuelle ne correspond pas à la langue préférée ou détectée
    if (userLanguage !== currentLanguage) {
        redirectToLanguage(userLanguage);
    }

    // Gestion des boutons pour changer de langue
    document.querySelectorAll("[data-language]").forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            const selectedLanguage = element.getAttribute("data-language");
            redirectToLanguage(selectedLanguage, true); // Indique que le changement est manuel
        });
    });
});