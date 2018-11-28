export function domInject(selector: string) {
  return function (target: any, key: string) {
    let element: HTMLInputElement;

    const getter = function() {
      if (!element) 
        element = <HTMLInputElement>document.querySelector(selector);

      return element;
    }

    Object.defineProperty(target, key, {
      get: getter
    });
  }
}
