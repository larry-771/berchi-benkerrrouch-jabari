
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (name === '') {
        alert('Veuillez entrer votre nom');
        e.preventDefault();
        return;
      }
      
      if (email === '') {
        alert('Veuillez entrer votre email');
        e.preventDefault();
        return;
      }
      
      if (password === '') {
        alert('Veuillez entrer votre mot de passe');
        e.preventDefault();
        return;
      }
      
      alert('Inscription réussie !');
    });
