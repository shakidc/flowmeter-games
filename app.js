// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase, ref, push, serverTimestamp, onValue, query, orderByChild, limitToLast } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

// 1. Sentralisasi Konfigurasi Firebase
const firebaseConfig = {
        apiKey: "AIzaSyAS8X770fb_v80w3Uk0c7dQK8UNHpHuSoM",
        authDomain: "metrologygame.firebaseapp.com",
        databaseURL: "https://metrologygame-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "metrologygame",
        storageBucket: "metrologygame.firebasestorage.app",
        messagingSenderId: "280925620427",
        appId: "1:280925620427:web:d2af6a81754d82e450f34e",
        measurementId: "G-GYBVT2560W"
    };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, push, serverTimestamp, onValue, query, orderByChild, limitToLast };

// 2. SVG Icons Modular
export const icons = {
    home: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    leaderboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`
};

// 3. Render Navigation Bar
export function renderNavbar(activePage = '') {
    const navHTML = `
        <nav class="navbar">
            <a href="index.html" class="nav-brand">
                ${icons.home} Metrology Lab
            </a>
            <div class="nav-links">
                <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Beranda</a>
                <a href="leaderboard.html" class="${activePage === 'leaderboard' ? 'active' : ''}">${icons.leaderboard} Leaderboard</a>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// 4. Flow Verifikasi Pemain (Wajib isi nama sebelum main)
export function requirePlayerName(onComplete) {
    // Jika nama sudah ada di sesi ini, langsung mulai
    const savedName = sessionStorage.getItem('playerName');
    if (savedName) {
        onComplete(savedName);
        return;
    }

    // Jika belum ada, munculkan modal
    const modalHTML = `
        <div class="modal-overlay" id="nameModal">
            <div class="modal-content">
                <h3 style="color: var(--primary); margin-top:0;">Identifikasi Auditor</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Masukkan nama Anda sebelum memulai inspeksi atau kalibrasi instrumen.</p>
                <input type="text" id="playerNameInput" placeholder="Contoh: Fulan (NIM/Instansi)" autocomplete="off">
                <button class="btn-primary" id="btnStartGame">Inisialisasi Sistem</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const btnStart = document.getElementById('btnStartGame');
    const inputName = document.getElementById('playerNameInput');

    btnStart.addEventListener('click', () => {
        const name = inputName.value.trim();
        if (name.length < 3) {
            alert('Masukkan nama valid (minimal 3 karakter).');
            return;
        }
        sessionStorage.setItem('playerName', name);
        document.getElementById('nameModal').remove();
        onComplete(name);
    });
}