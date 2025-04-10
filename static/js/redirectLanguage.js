function redirectToLanguage(language) {
    const supportedLanguages = ["en", "fr"]; // Liste des langues supportées
    if (supportedLanguages.includes(language)) {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace(/\/(en|fr)\//, `/${language}/`);
        if (currentUrl !== newUrl) {
            window.location.href = newUrl;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const userLanguage = navigator.language.slice(0, 2); // Récupère la langue du navigateur
    redirectToLanguage(userLanguage);
});