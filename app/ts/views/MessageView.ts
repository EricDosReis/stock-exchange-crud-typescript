class MessageView {

  private _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  template(model: string) {
    return `<p class="alert alert-info">${model}</p>`;
  }

  update(model: string) {
    this._element.innerHTML = this.template(model);
  }
}
