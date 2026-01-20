function toggleMenu(region) {
            // Get the countries list element
            var countriesList = document.getElementById(region);
            // Get the arrow element
            var arrow = document.getElementById('arrow-' + region);
            
            // Toggle the expanded class
            if (countriesList.classList.contains('expanded')) {
                countriesList.classList.remove('expanded');
                arrow.classList.remove('rotated');
            } else {
                countriesList.classList.add('expanded');
                arrow.classList.add('rotated');
            }
        }
 function handleSubmit() {
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                inquiryType: document.getElementById('inquiryType').value,
                howHeard: document.getElementById('howHeard').value,
                message: document.getElementById('message').value,
                agreedToTerms: document.getElementById('terms').checked
            };

            console.log('Form submitted:', formData);
            alert('Message sent successfully!');
        }