import ChatContainer from "./chatContainer";

const wrapper = document.querySelector(".wrapper");
const button = wrapper.querySelector(".button");
const container = wrapper.querySelector(".container");
const groundFloor = document.querySelector(".ground-floor");

button.addEventListener("click", (e) => {
  e.preventDefault();

  container.classList.toggle("show");
});

const chat = new ChatContainer(groundFloor);
