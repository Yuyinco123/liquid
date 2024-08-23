class Tabs extends HTMLElement {
  constructor() {
    super();
    this.titles = this.querySelectorAll('tab-title');
    this.contents = this.querySelectorAll('tab-content');
  }

  connectedCallback() {}
  removeTitlesActive() {
    this.titles.forEach((title) => {
      title.removeAttribute('active');
    });
  }

  removeContentActive() {
    this.contents.forEach((content) => {
      content.removeAttribute('active');
    });
  }
}

class TabTitle extends HTMLElement {
  constructor() {
    super();
    this.tabsContiner = this.closest('tabs-continer');
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      this.tabsContiner.removeTitlesActive();
      this.setAttribute('active', '');

      this.tabsContiner.removeContentActive();
      const activeContent = this.tabsContiner.querySelector(`tab-content[index="${this.getAttribute('index')}"]`);
      activeContent.setAttribute('active', '');
    });
  }
}

class TabContent extends HTMLElement {
  constructor() {
    super();
    this.tabsContiner = this.closest('tabs-continer');
  }

  connectedCallback() {}
}

customElements.define('tabs-continer', Tabs);
customElements.define('tab-title', TabTitle);
customElements.define('tab-content', TabContent);
