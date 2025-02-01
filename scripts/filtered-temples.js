// Set the current year and last modified date dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Toggle navigation menu when hamburger is clicked
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Array of temple objects with all the necessary data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://images.weserv.nl/?url=content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg&w=800&h=600"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://images.weserv.nl/?url=content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg&w=800&h=600"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://images.weserv.nl/?url=content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg&w=800&h=600"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://images.weserv.nl/?url=content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg&w=800&h=600"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://images.weserv.nl/?url=content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg&w=800&h=600"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://images.weserv.nl/?url=content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg&w=800&h=600"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://images.weserv.nl/?url=content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg&w=800&h=600"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://images.weserv.nl/?url=churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg&w=800&h=600"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://images.weserv.nl/?url=churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg&w=800&h=600"
    },
    {
        templeName: "Lisbon Portugal",
        location: "Lisboa, Portugal",
        dedicated: "2019, September, 15",
        area: 23730,
        imageUrl: "https://images.weserv.nl/?url=churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg&w=800&h=600"
    }
];

// Function to display temples dynamically in HTML
function displayTemples(filteredTemples) {
    const gallery = document.getElementById("temple-gallery");
    gallery.innerHTML = ""; // Clear any existing content

    // Create and append a card for each temple
    filteredTemples.forEach(temple => {
        const figure = document.createElement("figure");
        figure.classList.add("temple-card"); // Add a class for styling purposes
        figure.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName} - ${temple.location}" loading="lazy" width="800" height="600">
            <figcaption>
                <strong>${temple.templeName}</strong><br>
                Location: ${temple.location}<br>
                Dedicated: ${temple.dedicated}<br>
                Area: ${temple.area} sq ft
            </figcaption>
        `;
        gallery.appendChild(figure);
    });
}

// Function to filter temples based on selected criteria
function filterTemples(filter) {
    let filtered = temples;
    if (filter === "old") {
        filtered = temples.filter(t => parseInt(t.dedicated.split(", ")[0]) < 1900);
    } else if (filter === "new") {
        filtered = temples.filter(t => parseInt(t.dedicated.split(", ")[0]) > 2000);
    } else if (filter === "large") {
        filtered = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
        filtered = temples.filter(t => t.area < 10000);
    }
    displayTemples(filtered); // Update the display with filtered temples
}

// Event listener for navigation links to filter temples
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            const filter = event.target.dataset.filter; // Get the filter type
            filterTemples(filter); // Filter the temples based on the selected filter
        });
    });
});

// Display all temples initially
displayTemples(temples);
