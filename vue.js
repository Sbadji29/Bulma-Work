
const users = [
    { email: "etudiant1@mail.com", password: "1234" },
    { email: "etudiant2@mail.com", password: "abcd" }
];

// Récupération des éléments du formulaire

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");


// Gestion de la soumission du formulaire
// ---------------------------
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Réinitialiser les messages précédents
    message.classList.add("is-hidden");

    // Récupération des valeurs
    const email = emailInput.value;
    const password = passwordInput.value;

    // ---------------------------
    // Validation des identifiants
    // ---------------------------
    const utilisateurValide = users.find(user => 
        user.email === email && user.password === password
    );

    if (utilisateurValide) {
        // Connexion réussie
        showMessage("Connexion réussie ! Redirection en cours...", "is-success");
        
        // Redirection après 1 seconde
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1000);

    } else {
        // Identifiants incorrects
        showMessage("Email ou mot de passe incorrect.", "is-danger");
        
        // Animation d'erreur sur les champs
        emailInput.classList.add("is-danger");
        passwordInput.classList.add("is-danger");
    }
});

// ---------------------------
// Fonction pour afficher les messages
// ---------------------------
function showMessage(text, type) {
    message.textContent = text;
    message.className = `notification ${type}`;
    message.classList.remove("is-hidden");
    
    // Masquer automatiquement après 5 secondes
    setTimeout(() => {
        message.classList.add("is-hidden");
    }, 5000);
}


// Réinitialisation des styles d'erreur quand l'utilisateur tape

emailInput.addEventListener("input", function() {
    this.classList.remove("is-danger");
    this.classList.add("is-success");
});

passwordInput.addEventListener("input", function() {
    this.classList.remove("is-danger");
    this.classList.add("is-success");
});