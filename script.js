const form = document.getElementById('landingForm');

  form.addEventListener('submit', function(event) {
    // 1. Prevent the browser from trying to navigate to "index.html"
    event.preventDefault();

    // 2. (Optional) Access your form data here
    const formData = new FormData(form);
    console.log("Form submitted!", Object.fromEntries(formData));

    // 3. Redirect to the root (Landing Page)
    // Using '/' is more reliable on Vercel than 'index.html'
    window.location.href = '/';
  });
