// Toggle class active Untuk Soto Menu
const navbarNav = document.querySelector('.navbar-nav');
//Ketika Soto Menu di klik
document.querySelector('#soto-menu').onclick = (e) =>{
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

//Klik di dalam/luar elemen
const st = document.querySelector('#soto-menu');

document.addEventListener('click', function(e) {
    if(!st.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// Bagian Kontak Kami
function sendMessage(){
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const komentar = document.getElementById('komentar').value;

    const url = "https://api.whatsapp.com/send?phone=6281311769682&text=Nama%20%3A%20"+ nama +"%0AEmail%20%3A%20"+ email +"%0APesan%20%3A%20*"+ komentar +"*"

    window.open(url);
};

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('#item-detail-button');

itemDetailButton.onclick = (e) =>{
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
};

// Klik Tombol Close Modal
document.querySelector('.modal, .ikon-tutup').onclick = (e) =>{
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// Klik Diluar Modal
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) =>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
};