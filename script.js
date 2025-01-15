function openModal(type) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  
  modalTitle.textContent = 'Peça sua caixa customizada';
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

document.getElementById('order-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pedido enviado com sucesso! Entraremos em contato em breve.');
  closeModal();
});

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}