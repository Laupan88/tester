// Mencegah Klik Kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Mau cari apa dek? KUBIGU memantaumu!');
});

// Mencegah Kombinasi Keyboard (Ctrl + U, Ctrl + Shift + I, dll.)
document.addEventListener('keydown', function(e) {
    // Cegah Ctrl + U
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        alert('Mau cari apa dek? KUBIGU memantaumu!');
    }

    // Cegah Ctrl + Shift + I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        alert('Mau cari apa dek? KUBIGU memantaumu!');
    }

    // Cegah Ctrl + Shift + C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        alert('Mau cari apa dek? KUBIGU memantaumu!');
    }

    // Cegah Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
        e.preventDefault();
        alert('Mau cari apa dek? KUBIGU memantaumu!');
    }

    // Cegah F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        alert('Mau cari apa dek? KUBIGU memantaumu!');
    }
});