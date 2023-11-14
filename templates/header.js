class HeaderTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <div data-animation="default" class="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="500" data-doc-height="1">
      <div class="container nav-container">
          <div class="nav-menu-container"><a href="/" class="brand-link w-nav-brand"><img src="https://drive.prozukty.com/share/2P7Rv7AJhS4X3fGr" loading="lazy" alt="SaaS Webflow Template - Frankfurt - Created by Wedoflow.com and Azwedo.com" class="brand-logo"/></a>
              <div
                  class="nav-menu-holder">
                  <nav role="navigation" class="nav-menu w-nav-menu">
                      <div class="nav-links">
                          <div class="nav-link-holder">
                              <a href="/coming-soon.html" class="nav-link w-inline-block">
                                  <div>Home</div>
                              </a>
                          </div>
                          <div class="nav-link-holder">
                              <a href="/coming-soon.html" class="nav-link w-inline-block">
                                  <div>Features</div>
                              </a>
                          </div>
                          <div class="nav-link-holder">
                              <a href="/coming-soon.html" class="nav-link w-inline-block">
                                  <div>About</div>
                                  
                              </a>
                          </div>
                          <div class="nav-link-holder">
                              <a href="/coming-soon.html" class="nav-link w-inline-block">
                                  <div>Blog</div>
                              </a>
                          </div>
                          <div class="nav-link-holder">
                              <a href="/coming-soon.html" class="nav-link w-inline-block">
                                  <div>Shop</div>
                              </a>
                          </div>
                      </div>
                      <div class="nav-link-holder nav-button-holder">
                          <div class="nav-link-holder-with-dropdown">
                              <div data-hover="true" data-delay="300" class="nav-dropdown w-dropdown">
                                  <div class="nav-link dropdown-nav-link w-dropdown-toggle">
                                      <div class="nav-link-icon w-icon-dropdown-toggle"></div>
                                      <div>Pages</div>
                                      <div class="nav-dropdown-link-arrow-holder">
                                          <div class="nav-dropdown-link-arrow-animated">
                                              <div class="nav-dropdown-link-arrow"></div>
                                          </div>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div><a href="/coming-soon.html" class="button outline nav w-button">Sign in</a><a href="/coming-soon.html" class="button nav w-button">Join Waitlist</a></div>
                  </nav>
                  <div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper cart"><a href="/coming-soon.html" data-node-type="commerce-cart-open-link" aria-haspopup="dialog" aria-label="Open cart" role="button" class="w-commerce-commercecartopenlink nav-link cart-nav-link w-inline-block"><svg class="w-commerce-commercecartopenlinkicon icon" width="17px" height="17px" viewBox="0 0 17 17"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z" fill="currentColor" fill-rule="nonzero"></path></g></svg><img src="https://assets.website-files.com/64a2d507763883f0f77c7425/64ac22716bd4d99a029eb4c2_Cart%20Icon.svg" loading="lazy" alt="SaaS Webflow Template - Frankfurt - Created by Wedoflow.com and Azwedo.com" class="cart-image"/></a>                     
  </div>
  </div>
  <div class="menu-button w-nav-button"><img src="https://assets.website-files.com/64a2d507763883f0f77c7425/64a2d507763883f0f77c7446_menu-icon.svg" loading="lazy" alt="SaaS Webflow Template - Frankfurt - Created by Wedoflow.com and Azwedo.com" class="menu-icon" /></div>
  </div>
  </div>
  </div>



      `;
    }
  }

  customElements.define('header-template', HeaderTemplate);