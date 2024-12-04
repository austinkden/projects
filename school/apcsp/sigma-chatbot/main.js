const idList = [
    "",
    "select-element-by-id-css",
    "select-element-by-class-css",
    "heif-image-format",
    "real-sigma",
    "rule-of-thirds",
    "a380",
    "firefighters-died-911",
    "distance-us-uk",
];

const responseList = [
    "",
    "To select an element by ID in CSS, you can use a number sign (#) followed by the ID you want to select.",
    "To select an element by class in CSS, you can use a period (.) followed by the class you want to select.",
    "The HEIF image format is the high efficiency image format. Many Canon cameras and Apple devices use it. It is known for it's high compression ratio.",
    "Yes, I am the real Sigma.",
    "The Rule of Thirds is a composition guideline where an image is divided into nine equal parts by two horizontal and two vertical lines. Key elements are placed along these lines or at their intersections to create balance and visual interest.",
    "The Airbus A380 is 72.7 meters (238 feet 7 inches) long, with a wingspan of 79.75 meters (261 feet 8 inches) and a height of 24.1 meters (79 feet 9 inches). It can carry between 500 to 850 passengers, depending on configuration. It's the world's largest passenger airliner, with a maximum takeoff weight of around 1.2 million pounds (560,000 kg).",
    "343 firefighters died in the rescue efforts on September 11th, 2001.",
    "The United States is about 3,470 miles (5,580 kilometers) away from the United Kingdom."
];

let choiceSelected = 0;

const chat = document.getElementById("chat");

function getChoice(id) {
    const element = document.getElementById(id);
    const choice = element.textContent;
    return choice;
}

function addResponse(index, type) {
    const currentScroll = chat.scrollTop;

    if (type == "chatbot") {
        let responseContent = responseList[index];
        const responseContainer = document.createElement("div");
        responseContainer.classList.add("response-container");
        const response = document.createElement("p");
        response.textContent = responseContent;
        response.classList.add("chatbot", "response");
        responseContainer.appendChild(response);
        chat.insertBefore(responseContainer, chat.firstChild);
        responseContainer.scrollIntoView({ behavior: "smooth" });
    } else if (type == "user") {
        let responseContent = getChoice(idList[index]);
        const responseContainer = document.createElement("div");
        responseContainer.classList.add("response-container");
        const response = document.createElement("p");
        response.textContent = responseContent;
        response.classList.add("user", "response");
        responseContainer.appendChild(response);
        chat.insertBefore(responseContainer, chat.firstChild);
    }
}

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;
        getChoice(buttonId);
        choiceSelected = idList.indexOf(buttonId);
        addResponse(choiceSelected, "user");
        setTimeout(() => {
            addResponse(choiceSelected, "chatbot");
        }, 200)
    }
});

const searchInput = document.getElementById("search");
const choices = document.querySelectorAll(".choice");

searchInput.addEventListener("input", function(event) {
    const query = event.target.value.toLowerCase();
    
    choices.forEach(choice => {
        const choiceText = choice.textContent.toLowerCase();
        if (choiceText.includes(query)) {
            choice.style.display = "block";
        } else {
            choice.style.display = "none";
        }
    });
});
