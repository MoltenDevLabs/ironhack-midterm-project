const SERVER_URL = 'http://localhost:3001/contacts'

window.onload = () => {
  function formButton() {
    const name = document.querySelector(".fname-input").value;
    const email = document.querySelector(".email-input").value;
    const phone = document.querySelector(".phone-input").value;
    const message = document.querySelector(".message-input").value;

    const newContact = {
      name,
      email,
      phone,
      message
    }

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(message)

    saveContactData(newContact)
    return false
  }

  function saveContactData(contact) {
    fetch(SERVER_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
      .catch(err => console.error(err))
  }

  function bindEvents() {
    const submitButton = document.querySelector(".btn-contact");

    submitButton.addEventListener("click", (event) => {
      event.preventDefault()
      return formButton()
    });
  }

  bindEvents();
}