const form = document.getElementById('landingForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    console.log("Form submitted!", Object.fromEntries(formData));

    window.location.href = '/';
  });
