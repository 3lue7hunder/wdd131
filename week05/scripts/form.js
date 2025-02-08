

const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")


const fullYear = today.getFullYear()

const lastModification = document.lastModified

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];


    const productSelect = document.getElementById("productName");
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id; // Use the product id as the value
        option.textContent = product.name; // Display the product name
        productSelect.appendChild(option);
    });


});


