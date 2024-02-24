const welcomeMessage = document.getElementById("welcome-message");
const welcomeButton = document.getElementById("welcome-button");

welcomeButton.addEventListener("mouseover", () => {
	welcomeMessage.style.display = "block";
});

welcomeButton.addEventListener("mouseout", () => {
	welcomeMessage.style.display = "none";
});