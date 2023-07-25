// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/wind-farm-1214436.jpg",
        "./img/solar-collector-1216342.jpg",
        "./img/kerr-dam-1394270.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

// Complete your resource-object that will store the dynamic content.
// Each sub-object represents a solution with headingContent, bodyText, imgUrl, and imgAlt properties.
const resourceObject = {
    wind: {
        headingContent: "Wind Energy",
        bodyText: "Affordable wind energy is a cost-effective and sustainable solution for electricity generation. With \
        declining costs and no fuel expenses, it's becoming increasingly competitive with fossil fuels. This \
        affordability fosters widespread adoption, empowering communities and countries to access clean, \
        renewable energy while reducing their environmental impact.",
        imgUrl: "./img/wind-farm-1214436.jpg",
        imgAlt: "Windmill"
    },
    solar: {
        headingContent: "Solar Energy",
        bodyText: "Affordable solar energy is a cost-effective and eco-friendly power option. Decreasing solar panel costs and technological advancements have made solar energy more accessible. Its sustainability and long-term savings make it an attractive choice, promoting a cleaner environment and energy independence for individuals and communities alike.-based clean energy projects allow multiple households to pool their resources and invest in shared solar or wind installations. This approach lowers the individual cost burden, making clean energy more accessible to a broader segment of the population. Additionally, community projects foster a sense of ownership and collaboration, promoting sustainable practices within the community.",
        imgUrl: "./img/solar-collector-1216342.jpg",
        imgAlt: "SolarPanels"
    },
    hydro: {
        headingContent: "Hydro",
        bodyText: "Affordable hydro energy utilizes the power of flowing water to generate electricity. Its minimal operating costs and longevity make it cost-effective. Hydroelectric power's renewable nature and low environmental impact contribute to sustainable energy solutions, enabling communities to access clean and affordable electricity while reducing carbon emissions.",
        imgUrl:  "./img/kerr-dam-1394270.jpg",
        imgAlt: "WaterDam"
    }
};

// Get the reference to your HTML-container that will be dynamically loaded from the resource-object.
const dynamicContent = document.getElementById("dynamic-content");

// The first button in a NODE LIST of buttons will initially have the id: active-button (uniquely styled).
// The first content from the resource-object will be loaded on the page load.
window.addEventListener("load", () => {
    buttons[0].setAttribute("id", "active-button");
    updateContent(resourceObject.solution1);
});

// Start your handleSelection function here.
function handleSelection(event) {
    // Remove the id "active-button" from the element that contains it prior to the click-event.
    console.log("here")
    const activeButton = document.getElementById("active-button");
    if (activeButton) {
        activeButton.removeAttribute("id");
    }
    // Use the element-object method setAttribute() to set the id "active-button" to the currently clicked button.
    event.target.setAttribute("id", "active-button");
    console.log(event.target)

    // Use conditional and event-object to check which button is clicked and update the content accordingly.
    const clickedButton = event.target.dataset.key;
    const selectedSolution = resourceObject[clickedButton];

    // Check if the selectedSolution exists before updating the content
    if (selectedSolution) {
        updateContent(selectedSolution);
    }
}

// Register all buttons to click event. The event-handler handleSelection will listen for this event to happen.
const buttons = document.querySelectorAll(".toggle");
buttons.forEach(button => {
    button.addEventListener("click", handleSelection);
});

// Function to update the dynamic content based on the selected solution
function updateContent(solution) {
    dynamicContent.innerHTML = `
        <h2>${solution.headingContent}</h2>
        <div class="dynamic-child">
        <div class="dynamic-image">
            <img class="img-in-box" src="${solution.imgUrl}" alt="${solution.imgAlt}">
        </div>
        <p>${solution.bodyText}</p>
        </div>
    `;
}
