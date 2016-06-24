export class TodoClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-client-app h1')).getText();
  }
}
