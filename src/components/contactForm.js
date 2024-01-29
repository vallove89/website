const contactFormTemplate = document.createElement('template');
contactFormTemplate.innerHTML = `
<style>
    @import "./src/css/contact.css";
</style>
<form>
    <input type="text" name="name" id="name" placeholder="Name" class="contact-input">
    <input type="email" name="email" id="email" placeholder="Email" class="contact-input">
    <input type="tel" name="phone" id="phone" placeholder="Enter your phone" class="contact-input">
    <textarea rows="5" name="message" id="message" placeholder="Mssage" class="contact-input"></textarea>
    <input type="submit" value="Send">
</form>
`;

class ContactForm extends HTMLElement{
    connectedCallback(){
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(contactFormTemplate.content.cloneNode(true));
    }
}

window.customElements.define('contact-form',ContactForm);