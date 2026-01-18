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