  const form = document.getElementById('userForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const toast = new bootstrap.Toast(document.getElementById('toast'));
    toast.show();
  });