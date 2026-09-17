const evetBtn = document.getElementById('evetBtn');
const hayirBtn = document.getElementById('hayirBtn');
const soru = document.getElementById('soru');
const heartsBg = document.getElementById('heartsBg');

// Arka plana rastgele kalpler oluşturan fonksiyon
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    
    // Rastgele kalp simgeleri
    const hearts = ['💖', '🌸', '✨', '💕', '💗'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // 3-6 saniye arası
    heart.style.fontSize = Math.random() * 15 + 15 + 'px'; // 15-30px arası
    
    heartsBg.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Her 400 milisaniyede bir yeni kalp uçur
setInterval(createHeart, 400);

// Hayır butonunda sırayla çıkacak yazılar
const hayirMesajlari = [
    "Cidden mi?",
    "Gerçekten mi?",
    "Emin misin?",
    "Bir daha düşün?",
    "Bak son kararın mı?",
    "Yapma be...",
    "Kırma beni :(",
    "Lütfen? 🥺"
];

let mesajIndex = 0;
let evetBoyut = 1;
let hayirBoyut = 1;

hayirBtn.addEventListener('click', () => {
    // Tıklandığında pulse animasyonunu kaldır ki manuel büyütme çakışmasın
    evetBtn.classList.remove('pulse');

    // Hayır butonunun yazısını değiştir
    hayirBtn.innerText = hayirMesajlari[mesajIndex];
    mesajIndex = (mesajIndex + 1) % hayirMesajlari.length;

    // Evet butonunu büyüt
    evetBoyut += 0.35;
    evetBtn.style.transform = `scale(${evetBoyut})`;

    // Hayır butonunu küçült
    if (hayirBoyut > 0.2) {
        hayirBoyut -= 0.12;
        hayirBtn.style.transform = `scale(${hayirBoyut})`;
    }
});

// Evet butonuna tıklandığında ne olacağı
evetBtn.addEventListener('click', () => {
    soru.innerText = "Yaa! Biliyordum! 💖 Şahane olacak! 🥰🎉";
    evetBtn.style.display = "none";
    hayirBtn.style.display = "none";
    
    // Evet'e basılınca ekranı bolca kalple doldur
    for(let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
});