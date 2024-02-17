import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./show_message.js";

// Obtenemos el form con ese id
const signupForm = document.getElementById('signup-form');

// Agregamos el evento al mandar el form
signupForm.addEventListener('submit', async (e) => {
    // Para prevenir que la pagina se recarge
    e.preventDefault();

    // Accedemos a los elementos con notación de corchete
    const email = signupForm['email-signup'].value;
    const password = signupForm['password-signup'].value;

    try {
        // Obtener las credenciales de forma asincrona
        const credentials = await createUserWithEmailAndPassword(auth, email, password);

        // Ocultar el modal
        const signupModal = document.getElementById('signup-modal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        // Limpiamos los campos del form
        signupForm.reset();
        modal.hide();
    }
    // Manejo de errores
    catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Email already in use', 'red')
        }
        else if (error.code === 'auth/invalid-email') {
            showMessage('Invalid email', 'red')
        }
        else if (error.code === 'auth/weak-password') {
            showMessage('Weak password', 'red')
        }
        else {
            showMessage('Something went wrong', 'red')
        }
    }
});