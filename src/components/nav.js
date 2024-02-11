const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<style>
    @import "./src/css/nav.css";
</style>
<header>
        <nav class="navbar standard-nav">
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
                    <a href="https://vallove89.github.io/website/">
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
    </header>
`;

class Navigation extends HTMLElement{
    connectedCallback(){
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(navTemplate.content.cloneNode(true));
    }
}

window.customElements.define('nav-bar',Navigation);