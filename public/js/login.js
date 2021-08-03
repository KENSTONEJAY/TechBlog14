const loginFormHandler = (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    loginHandler(username, password);
  };
  
  const loginHandler = async (username, password) => {
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  