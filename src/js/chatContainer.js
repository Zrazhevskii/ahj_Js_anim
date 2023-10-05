export default class ChatContainer {
  constructor(container) {
    this.container = container;

    this.containerCallbackChat = document.createElement("div");
    this.containerCallbackChat.classList.add("chat-container");

    this.button = this.createCallbackChatButton();
    this.chatWindow = this.createChatWindow();

    this.container.appendChild(this.containerCallbackChat);

    this.button.addEventListener("click", () => this.showChatForm());
    this.closeButton.addEventListener("click", () => this.closeChatForm());
  }

  createCallbackChatButton() {
    const button = document.createElement("button");
    button.classList.add("chat-button");
    this.containerCallbackChat.appendChild(button);
    return button;
  }

  createChatWindow() {
    const chatWindow = document.createElement("div");
    chatWindow.classList.add("chat-window");

    const chatWindowTitle = document.createElement("div");
    chatWindowTitle.className = "chat-window-title";
    chatWindowTitle.textContent = "Напишите нам";

    const messageInput = document.createElement("textarea");
    messageInput.className = "message-input";
    messageInput.placeholder = "Введите сообщение...";

    const sendButton = document.createElement("button");
    sendButton.className = "send-button";
    sendButton.textContent = "Отправить";

    this.closeButton = document.createElement("button");
    this.closeButton.className = "close-button";

    chatWindow.appendChild(chatWindowTitle);
    chatWindow.appendChild(messageInput);
    chatWindow.appendChild(sendButton);
    chatWindow.appendChild(this.closeButton);

    this.containerCallbackChat.appendChild(chatWindow);
    return chatWindow;
  }

  showChatForm() {
    this.button.classList.add("chat-button-hide");
    this.chatWindow.classList.remove("chat-window-close");
    this.chatWindow.classList.add("chat-window-show");
  }

  closeChatForm() {
    this.button.classList.remove("chat-button-hide");
    this.chatWindow.classList.remove("chat-window-show");
    this.chatWindow.classList.add("chat-window-close");
  }

  getDOMElement() {
    return this.containerCollapse;
  }
}
