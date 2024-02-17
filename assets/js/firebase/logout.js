import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js"
import { showMessage } from "./show_message.js";

const logout = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await signOut(auth);
});