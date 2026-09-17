const evetBtn = document.getElementById('evetBtn');
const hayirBtn = document.getElementById('hayirBtn');
const soru = document.getElementById('soru');
const heartsBg = document.getElementById('heartsBg');

// Arka plana rastgele kalpler oluşturan fonksiyon
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    
    const hearts = ['💖', '🌸', '✨', '💕', '💗'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    
    heartsBg.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);

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
    evetBtn.classList.remove('pulse');

    hayirBtn.innerText = hayirMesajlari[mesajIndex];
    mesajIndex = (mesajIndex + 1) % hayirMesajlari.length;

    evetBoyut += 0.35;
    evetBtn.style.transform = `scale(${evetBoyut})`;

    if (hayirBoyut > 0.2) {
        hayirBoyut -= 0.12;
        hayirBtn.style.transform = `scale(${hayirBoyut})`;
    }
});

// Evet butonuna tıklandığında
evetBtn.addEventListener('click', () => {
    // BURAYA KENDİ TELEFON NUMARANI YAZ (Örn: 905551112233 şeklinde, başında + olmadan)
    const telefonNumarasi = "905510633473"; 
    
    soru.innerHTML = `
        İVİTT DİCENİ BİLİYORDUM 💖<br>
        HEMEN YAZ: <br>
        <a href="https://wa.me/${telefonNumarasi}?text=Siteni%20gördüm,%20kabul%20ediyorum!%20🥰" 
           target="_blank" 
           style="display:inline-block; margin-top:15px; padding:12px 24px; background-color:#25D366; color:white; text-decoration:none; border-radius:50px; font-weight:bold; font-size:1.2rem; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
           WhatsApp'tan Yaz 💬
        </a>
    `;
    
    evetBtn.style.display = "none";
    hayirBtn.style.display = "none";
    
    for(let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
});
