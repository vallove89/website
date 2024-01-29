const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<style>
    @import "./src/css/nav.css";
</style>
<header class=landing-nav>
        <nav class="navbar top">
            <!-- LOGO -->
            <div class="logo">
                Logo
            </div>
    
            <!-- NAVIGATION MENU -->
            <ul class="nav-links">
    
                <!-- USING CHECKBOX HACK -->
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
    
                <!-- NAVIGATION MENUS -->
                <div class="menu">
    
                <li>
                    <a href="/" class="current" >
                        Home
                    </a>
                </li>
                <li>
                    <a href="/donate.html">
                        Dontate
                    </a>
                </li>
                <li>
                    <a href="/gallery.html">
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="/about.html">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="/contact.html">
                        Contact
                    </a>
                </li>
                </div>
            </ul>
        </nav>
        <div class="hero">
            <div class="action">
                <h2 class="action-item">Support Our Veterans</h2>
                <a class="action-item"><span>Donate Today</span></a>
            </div>
        </div>
    </header>
`;

class Navigation extends HTMLElement{
    connectedCallback(){
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(navTemplate.content.cloneNode(true));
    }
}

window.customElements.define('nav-bar',Navigation);