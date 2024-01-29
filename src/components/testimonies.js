const testimoniesTemplate = document.createElement('template');
testimoniesTemplate.innerHTML = `
<style>
    @import "./src/css/testimonies.css";
</style>
<div class="testimonies">
    <div class="testimony">
        <p class="testimony">
            Being part of [Your Organization] has been life-changing. The accessible hunting experiences not only allowed me to reconnect with the outdoors but also provided a sense of camaraderie I thought I had lost. This organization truly understands and supports veterans like no other.
        </p>
        <p class="name">
            John Do, <span>U.S. Army Veteran</span>
        </p>
    </div>
    <div class="testimony">
        <p class="testimony">
            Being part of [Your Organization] has been life-changing. The accessible hunting experiences not only allowed me to reconnect with the outdoors but also provided a sense of camaraderie I thought I had lost. This organization truly understands and supports veterans like no other.
        </p>
        <p class="name">
            John Do, <span>U.S. Army Veteran</span>
        </p>
    </div>
    <div class="testimony">
        <p class="testimony">
            Being part of [Your Organization] has been life-changing. The accessible hunting experiences not only allowed me to reconnect with the outdoors but also provided a sense of camaraderie I thought I had lost. This organization truly understands and supports veterans like no other.
        </p>
        <p class="name">
            John Do, <span>U.S. Army Veteran</span>
        </p>
    </div>
</div>
`;

class Testimonies extends HTMLElement{
    connectedCallback(){
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(testimoniesTemplate.content.cloneNode(true));
    }
}

window.customElements.define('my-testimonies',Testimonies);