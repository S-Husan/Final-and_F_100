function toggleMenu(region) {
    // Get all countries lists and arrows
    var allCountriesLists = document.querySelectorAll('.countries-list');
    var allArrows = document.querySelectorAll('.arrow');
    
    // Get the clicked region's elements
    var countriesList = document.getElementById(region);
    var arrow = document.getElementById('arrow-' + region);
    
    // Check if the clicked region is already expanded
    var isCurrentlyExpanded = countriesList.classList.contains('expanded');
    
    // Close all regions first
    allCountriesLists.forEach(function(list) {
        list.classList.remove('expanded');
    });
    
    allArrows.forEach(function(arrowEl) {
        arrowEl.classList.remove('rotated');
    });
    
    // If the clicked region was NOT expanded, open it
    // (If it was expanded, it stays closed after the above loop)
    if (!isCurrentlyExpanded) {
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