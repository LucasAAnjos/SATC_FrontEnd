const messagesList = document.querySelector("div.chat_content");
const formChat = document.querySelector("#send_area");

function scrollMessagesToBottom() {
  messagesList.scrollTop = messagesList.scrollHeight;
}

function addMessage(event) {
  event.preventDefault();

  // .value recupera o valor de leitura/conteúdo de um campo inputável
  const message = document.querySelector("#msg_content")?.value;
  if (message?.trim() === "") {
    alert("Informe uma mensagem válida antes de enviar");
    return;
  }

  // se chegar aqui é pq preencheu algo
  const messageElement = document.createElement("div");
  messageElement.classList.add("msg_chat", "msg_sent");
  messageElement.innerHTML = `<p class = "username">Laurinha do Camarão says:</p>
                              <p class = "message">${message}</p>`;

  // aqui adicionamos a mensagem criada em tela dentro do elemento certo
  messagesList.appendChild(messageElement);
  // limpamos o form para outra mensagem
  formChat.reset();
  // e forçamos uma "rolagem" para  nova mensagem aparecer como última
  scrollMessagesToBottom();
}

formChat.addEventListener("submit", addMessage);
scrollMessagesToBottom();
