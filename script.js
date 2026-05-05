const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const invitationCard = document.getElementById('invitationCard');
const closeBtn = document.getElementById('closeBtn');

function abrirConvite() {
    envelope.classList.add('flap-open');
    invitationCard.classList.add('open');
    openBtn.style.display = 'none';
}

function fecharConvite() {
    invitationCard.classList.remove('open');
    envelope.classList.remove('flap-open');
    openBtn.style.display = 'block';
}

openBtn.addEventListener('click', abrirConvite);
closeBtn.addEventListener('click', fecharConvite);