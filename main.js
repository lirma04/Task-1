const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const output = document.querySelector("#output");

    output.textContent = `${event.target.mass.value *2.2046} lb , ${event.target.mass.value /0.0010000} g , ${event.target.mass.value *35.274} oz `
})

