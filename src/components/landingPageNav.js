const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<style>
    @import "./src/css/nav.css";
</style>
<header class=landing-nav>
        <div class="overlay"></div>
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
                    <a href="https://vallove89.github.io/website/" class="current" >
                        Home
                    </a>
                </li>
                <li>
                    <a href="https://vallove89.github.io/website/donate.html">
                        Dontate
                    </a>
                </li>
                <li>
                    <a href="https://vallove89.github.io/website/gallery.html">
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="https://vallove89.github.io/website/about.html">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="https://vallove89.github.io/website/contact.html">
                        Contact
                    </a>
                </li>
                </div>
            </ul>
        </nav>
        <div class="action">
            <h2>Make a Differences Today!</h2>
            <p>Support our mission for accessible hunting experiences by donating today.</p>
                    <a href="/https://vallove89.github.io/website/donate.html">Click here to visit our donation page!</a>
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