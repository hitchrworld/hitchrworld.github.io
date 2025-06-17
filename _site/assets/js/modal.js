document.addEventListener('DOMContentLoaded', function() {
  // Download modal
  var modal = document.getElementById('download-modal');
  var openBtn = document.getElementById('download-btn');
  var closeBtn = modal ? modal.querySelector('.modal-close') : null;
  var form = document.getElementById('waitlist-form');
  var emailInput = document.getElementById('waitlist-email');
  var successMsg = document.getElementById('waitlist-success');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (emailInput) emailInput.focus();
  }
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    if (form) form.style.display = '';
    if (successMsg) successMsg.style.display = 'none';
    if (emailInput) emailInput.value = '';
  }
  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (modal && modal.style.display === 'flex') closeModal();
      if (waitlistModal && waitlistModal.style.display === 'flex') closeWaitlistModal();
    }
  });
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
  }
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = emailInput.value.trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        emailInput.style.borderColor = 'red';
        emailInput.focus();
        return;
      }
      emailInput.style.borderColor = '';
      form.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }

  // Waitlist modal
  var waitlistModal = document.getElementById('waitlist-modal');
  var waitlistBtn = document.getElementById('waitlist-btn');
  var waitlistCloseBtn = waitlistModal ? waitlistModal.querySelector('.modal-close') : null;

  function openWaitlistModal(e) {
    if (e) e.preventDefault();
    waitlistModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeWaitlistModal() {
    waitlistModal.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (waitlistBtn) waitlistBtn.addEventListener('click', openWaitlistModal);
  if (waitlistCloseBtn) waitlistCloseBtn.addEventListener('click', closeWaitlistModal);
  if (waitlistModal) {
    waitlistModal.addEventListener('click', function(e) {
      if (e.target === waitlistModal) closeWaitlistModal();
    });
  }
}); 