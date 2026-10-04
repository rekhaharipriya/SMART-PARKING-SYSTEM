import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCn15-KFQDxeIW0NkYOm7pG3gV8b_k1sRg",
    authDomain: "smart-parking-system-7f300.firebaseapp.com",
    projectId: "smart-parking-system-7f300",
    storageBucket: "smart-parking-system-7f300.firebasestorage.app",
    messagingSenderId: "103289198276",
    appId: "1:103289198276:web:4bd0132da01258ac5b9b91"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);