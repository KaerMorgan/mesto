export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this.addItem(item)
    });
  }

  addItem(item) {
    const element = this._renderer(item);
    this._container.prepend(element);
  }
}
