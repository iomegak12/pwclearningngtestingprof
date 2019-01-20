import { browser, by, element } from "protractor";

export class HomePage {
  navigateTo() {
    return browser.get("/");
  }

  getTitleText() {
    return browser.getTitle();
  }

  getHeaderString() {
    return element(by.css("h1")).getText();
  }
}
