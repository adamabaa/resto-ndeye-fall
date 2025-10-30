// Données du menu (simulées)
const menuData = {
    "entrees": [
        {
            "id": 1,
            "nom": "Accras de Morue",
            "description": "Beignets de morue épicés, servis avec une sauce piquante.",
            "prix": "3500 FCFA",
            "image": "/assets/images/plat7.png"
        },
        {
            "id": 2,
            "nom": "Salade César Sénégalaise",
            "description": "Salade fraîche avec laitue, croûtons, parmesan et une touche d'épices locales.",
            "prix": "4000 FCFA",
            "image": "assets/images/plat8.png"
        },
        {
            "id": 3,
            "nom": "Boulettes de Viande",
            "description": "Boulettes de bœuf épicées, servies avec une sauce tomate maison.",
            "prix": "4500 FCFA",
            "image": "assets/images/plat9.png"
        }
    ],
    "plats": [
        {
            "id": 4,
            "nom": "Thiébou Dieune",
            "description": "Riz au poisson avec légumes et sauce tomate, plat national sénégalais.",
            "prix": "8000 FCFA",
            "image": "assets/images/plat1.png"
        },
        {
            "id": 5,
            "nom": "Yassa Poulet",
            "description": "Poulet mariné au citron et oignons, servi avec du riz blanc.",
            "prix": "7500 FCFA",
            "image": "assets/images/plat2.png"
        },
        {
            "id": 6,
            "nom": "Mafé",
            "description": "Ragoût de viande dans une sauce à base d'arachide, accompagné de riz.",
            "prix": "7000 FCFA",
            "image": "assets/images/plat3.png"
        },
        {
            "id": 7,
            "nom": "Poulet DG",
            "description": "Poulet sauté avec des légumes, plantains et épices.",
            "prix": "8500 FCFA",
            "image": "assets/images/plat4.png"
        }
    ],
    "desserts": [
        {
            "id": 8,
            "nom": "Thiakry",
            "description": "Dessert à base de mil, yaourt et fruits secs.",
            "prix": "3000 FCFA",
            "image": "assets/images/plat5.png"
        },
        {
            "id": 9,
            "nom": "Bananes Flambées",
            "description": "Bananes caramélisées au rhum, servies avec une boule de glace vanille.",
            "prix": "3500 FCFA",
            "image": "assets/images/plat6.png"
        }
    ],
    "boissons": [
        {
            "id": 10,
            "nom": "Bissap",
            "description": "Jus d'hibiscus frais, rafraîchissant et naturel.",
            "prix": "2000 FCFA",
            "image": "assets/images/plat1.png"
        },
        {
            "id": 11,
            "nom": "Bouye",
            "description": "Jus de fruit du baobab, riche en vitamines.",
            "prix": "2500 FCFA",
            "image": "assets/images/plat2.png"
        },
        {
            "id": 12,
            "nom": "Café Touba",
            "description": "Café sénégalais épicé, traditionnel et aromatique.",
            "prix": "1500 FCFA",
            "image": "assets/images/plat3.png"
        }
    ]
};

// Données de la galerie (simulées)
const galleryData = {
    "plats": [
        {"id": 2, "image": "assets/images/plat2.png", "title": "Yassa Poulet"},
        {"id": 1, "image": "assets/images/plat1.png", "title": "Thiébou Dieune"},
        {"id": 3, "image": "assets/images/plat3.png", "title": "Mafé"},
        {"id": 4, "image": "assets/images/plat4.png", "title": "Accras de Morue"},
        {"id": 5, "image": "assets/images/plat5.png", "title": "Salade César"},
        {"id": 6, "image": "assets/images/plat6.png", "title": "Thiakry"}
    ],
    "restaurant": [
        {"id": 7, "image": "assets/images/restaurant1.png", "title": "Salle principale"},
        {"id": 8, "image": "assets/images/restaurant2.png", "title": "Terrasse"},
        {"id": 9, "image": "assets/images/plat1.png", "title": "Cuisine"},
        {"id": 10, "image": "assets/images/plat2.png", "title": "Bar"}
    ],
    "evenements": [
        {"id": 11, "image": "assets/images/plat3.png", "title": "Mariage"},
        {"id": 12, "image": "assets/images/plat4.png", "title": "Anniversaire"},
        {"id": 13, "image": "assets/images/plat5.png", "title": "Buffet d'entreprise"},
        {"id": 14, "image": "assets/images/plat6.png", "title": "Dîner en famille"}
    ]
};

// Fonction pour charger le menu
function loadMenu() {
    // Charger les entrées
    if (document.getElementById('entrees-container')) {
        const entreesContainer = document.getElementById('entrees-container');
        menuData.entrees.forEach(item => {
            entreesContainer.innerHTML += createMenuItem(item);
        });
    }

    // Charger les plats principaux
    if (document.getElementById('plats-container')) {
        const platsContainer = document.getElementById('plats-container');
        menuData.plats.forEach(item => {
            platsContainer.innerHTML += createMenuItem(item);
        });
    }

    // Charger les desserts
    if (document.getElementById('desserts-container')) {
        const dessertsContainer = document.getElementById('desserts-container');
        menuData.desserts.forEach(item => {
            dessertsContainer.innerHTML += createMenuItem(item);
        });
    }

    // Charger les boissons
    if (document.getElementById('boissons-container')) {
        const boissonsContainer = document.getElementById('boissons-container');
        menuData.boissons.forEach(item => {
            boissonsContainer.innerHTML += createMenuItem(item);
        });
    }
}

// Fonction pour créer un élément de menu
function createMenuItem(item) {
    return `
        <div class="col-md-6 mb-4">
            <div class="menu-item">
                <img src="${item.image}" alt="${item.nom}">
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h3>${item.nom}</h3>
                        <span class="menu-item-price">${item.prix}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour charger la galerie
function loadGallery() {
    // Charger les images de plats
    if (document.getElementById('plats-gallery')) {
        const platsGallery = document.getElementById('plats-gallery');
        galleryData.plats.forEach(item => {
            platsGallery.innerHTML += createGalleryItem(item);
        });
    }

    // Charger les images du restaurant
    if (document.getElementById('restaurant-gallery')) {
        const restaurantGallery = document.getElementById('restaurant-gallery');
        galleryData.restaurant.forEach(item => {
            restaurantGallery.innerHTML += createGalleryItem(item);
        });
    }

    // Charger les images d'événements
    if (document.getElementById('evenements-gallery')) {
        const evenementsGallery = document.getElementById('evenements-gallery');
        galleryData.evenements.forEach(item => {
            evenementsGallery.innerHTML += createGalleryItem(item);
        });
    }
}

// Fonction pour créer un élément de galerie
function createGalleryItem(item) {
    return `
        <div class="col-md-4">
            <div class="gallery-item">
                <img src="${item.image}" alt="${item.title}">
            </div>
        </div>
    `;
}

// Gestion des formulaires
function setupForms() {
    // Formulaire de commande
    const commandeForm = document.getElementById('commande-form');
    if (commandeForm) {
        commandeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const telephone = document.getElementById('telephone').value;
            const type = document.getElementById('type').value;
            const date = document.getElementById('date').value;
            const heure = document.getElementById('heure').value;
            const personnes = document.getElementById('personnes').value;
            const message = document.getElementById('message').value;
            
            // Simulation d'envoi
            alert(`Merci ${nom} ! Votre demande de ${type} a été envoyée. Nous vous contacterons bientôt au ${telephone}.`);
            
            // Réinitialiser le formulaire
            commandeForm.reset();
        });
        
        // Afficher/masquer les champs en fonction du type de demande
        const typeSelect = document.getElementById('type');
        const dateField = document.getElementById('date-field');
        const heureField = document.getElementById('heure-field');
        const personnesField = document.getElementById('personnes-field');
        
        typeSelect.addEventListener('change', function() {
            if (this.value === 'commande') {
                dateField.style.display = 'block';
                heureField.style.display = 'block';
                personnesField.style.display = 'none';
            } else if (this.value === 'reservation') {
                dateField.style.display = 'block';
                heureField.style.display = 'block';
                personnesField.style.display = 'block';
            } else if (this.value === 'traiteur') {
                dateField.style.display = 'block';
                heureField.style.display = 'none';
                personnesField.style.display = 'block';
            } else {
                dateField.style.display = 'none';
                heureField.style.display = 'none';
                personnesField.style.display = 'none';
            }
        });
        
        // Masquer les champs par défaut
        dateField.style.display = 'none';
        heureField.style.display = 'none';
        personnesField.style.display = 'none';
    }
    
    // Formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const sujet = document.getElementById('sujet').value;
            const message = document.getElementById('message').value;
            
            // Simulation d'envoi
            alert(`Merci ${nom} ! Votre message a été envoyé. Nous vous répondrons bientôt à ${email}.`);
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
}

// Animation au défilement
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadMenu();
    loadGallery();
    setupForms();
    setupScrollAnimations();
});