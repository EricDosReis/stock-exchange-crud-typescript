export abstract class View<T> {

  private _element: Element;
  private _noScriptTag: boolean;

  constructor(selector: string, noScriptTag: boolean = false) {
    this._element = document.querySelector(selector) || document.body;
    this._noScriptTag = noScriptTag;
  }
  
  abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);

    if (this._noScriptTag) 
      template = this._removeScriptTag(template);

    this._element.innerHTML = template;
  }

  private _removeScriptTag(template: string): string {
    return template.replace(/<script>[\s\S]*?<\/script>/g, '');
  }

}
