import validate from "./validator";
import defineSystem from "./defineSystem";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".card-form-widget");
    const cards = document.createElement("ul");
    cards.className = "cards";
    container.append(cards);
    for (let system of ["mir", "amex", "jcb", "diners", "visa", "mastercard", "maestro", "unionpay", "discover"]) {
        const card = document.createElement("li");
        card.className = "card " + system;
        cards.append(card);
    }
    const form = document.createElement("form");
    form.className = "card-form";
    container.append(form);
    const input = document.createElement("input");
    input.className = "card-form-control";
    input.type = "text";
    input.name = "card_number";
    input.placeholder = "Credit card number";
    form.append(input);
    const button = document.createElement("button");
    button.className = "card-form-submit";
    button.textContent = "Click to Validate";
    form.append(button);
    const output = document.createElement("div");
    output.className = "validation-result";
    output.textContent = "Luhn Algorithm";
    form.append(output);
    form.addEventListener("submit", validate(input, output));
    form.addEventListener("input", defineSystem(input));
})