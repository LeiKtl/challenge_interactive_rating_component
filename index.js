let lastRatedNumber = null;

function selectedElement () {
    const numbers = document.querySelectorAll(".container_rating_number");
    
    numbers.forEach((number, index) => {
        number.addEventListener("click", () => {
            const currentSelected = document.querySelector(".selected")
            if (currentSelected) {
                currentSelected.classList.remove("selected")
            }
            number.classList.add("selected");
            lastRatedNumber = index +1;
        })
    })
}

function newContainerContent () {
    if (lastRatedNumber) {
        const containerContent = document.querySelector(".container_rating");
        containerContent.innerHTML = "";
        containerContent.classList.add("container_submitted")
        const img = document.createElement("img");
        img.src = "./images/illustration-thank-you.svg";
        img.alt = "thank you illustration";
        img.classList.add("container_submitted_img");

        const spanRating = document.createElement("span");
        spanRating.textContent = `You selected ${lastRatedNumber} out of 5`;
        spanRating.classList.add("container_submitted_selected-rating");

        const titleRating = document.createElement("h1");
        titleRating.textContent = "Thank you!";
        titleRating.classList.add("container_submitted_title")

        const contentRating = document.createElement("p");
        contentRating.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
        contentRating.classList.add("container_submitted_content");

        containerContent.appendChild(img);
        containerContent.appendChild(spanRating);
        containerContent.appendChild(titleRating);
        containerContent.appendChild(contentRating);
    }
}

function submitted () {
    const submitButton = document.querySelector(".container_rating_submit-button")
    submitButton.addEventListener("click", newContainerContent)
}

selectedElement();
submitted();