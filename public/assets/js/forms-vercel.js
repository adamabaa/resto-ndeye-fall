// public/assets/js/forms-vercel.js
class FormHandlerVercel {
    constructor() {
        this.backendUrl = 'https://votre-backend.render.com'; // À remplacer par votre URL Render
        this.initForms();
    }

    initForms() {
        // Formulaire de contact
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContact(e));
        }

        // Formulaire de commande
        const commandeForm = document.getElementById('commande-form');
        if (commandeForm) {
            commandeForm.addEventListener('submit', (e) => this.handleCommande(e));
        }
    }

    async handleContact(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            this.setButtonLoading(submitBtn, 'Envoi...');

            const formData = new FormData(form);
            const data = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                telephone: formData.get('telephone'),
                message: formData.get('message')
            };

            // Option 1: Envoyer vers votre backend Render
            const response = await fetch(`${this.backendUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                this.showSuccess(result.message || 'Message envoyé avec succès!');
                form.reset();
            } else {
                throw new Error('Erreur serveur');
            }

        } catch (error) {
            // Fallback: Utiliser FormSubmit.co si le backend échoue
            await this.fallbackFormSubmit(form, 'contact');
        } finally {
            this.resetButton(submitBtn, originalText);
        }
    }

    async handleCommande(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            this.setButtonLoading(submitBtn, 'Traitement...');

            const formData = new FormData(form);
            const data = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                telephone: formData.get('telephone'),
                type: formData.get('type'),
                date: formData.get('date'),
                heure: formData.get('heure'),
                personnes: formData.get('personnes'),
                message: formData.get('message')
            };

            // Option 1: Envoyer vers votre backend Render
            const response = await fetch(`${this.backendUrl}/api/commandes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                this.showSuccess(result.message || 'Commande enregistrée avec succès!');
                
                if (result.numero_commande) {
                    setTimeout(() => {
                        this.showOrderNumber(result.numero_commande);
                    }, 1000);
                }
                
                form.reset();
            } else {
                throw new Error('Erreur serveur');
            }

        } catch (error) {
            // Fallback: Utiliser FormSubmit.co
            await this.fallbackFormSubmit(form, 'commande');
        } finally {
            this.resetButton(submitBtn, originalText);
        }
    }

    async fallbackFormSubmit(form, type) {
        // Configuration FormSubmit.co
        const formData = new FormData(form);
        
        // Ajouter des champs cachés pour FormSubmit
        const hiddenInputs = {
            '_subject': type === 'contact' ? 'Nouveau message du site' : 'Nouvelle commande',
            '_template': 'table',
            '_captcha': 'false'
        };

        Object.entries(hiddenInputs).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });

        // Configurer FormSubmit
        form.action = `https://formsubmit.co/${this.getFormsubmitEmail()}`;
        form.method = 'POST';
        
        // Soumettre le formulaire
        form.submit();
    }

    getFormsubmitEmail() {
        // Remplacez par votre email
        return 'votre-email@gmail.com';
    }

    setButtonLoading(button, text) {
        button.innerHTML = `<span class="spinner-border spinner-border-sm"></span> ${text}`;
        button.disabled = true;
    }

    resetButton(button, originalText) {
        button.innerHTML = originalText;
        button.disabled = false;
    }

    showSuccess(message) {
        this.showAlert(message, 'success');
    }

    showError(message) {
        this.showAlert(message, 'danger');
    }

    showOrderNumber(orderNumber) {
        const modalHtml = `
            <div class="modal fade" id="orderModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">✅ Commande Confirmée</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body text-center">
                            <i class="fas fa-check-circle text-success fa-3x mb-3"></i>
                            <h4>Votre commande a été enregistrée</h4>
                            <p class="lead">Numéro de commande: <strong>${orderNumber}</strong></p>
                            <p class="text-muted">Conservez ce numéro pour le suivi de votre commande.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = new bootstrap.Modal(document.getElementById('orderModal'));
        modal.show();
    }

    showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
        `;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    new FormHandlerVercel();
});