import { HomePage } from "./home.e2e-po";

describe("Home Page Test Suite", () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it("Valid Test Case 1", () => {
    homePage.navigateTo();

    const expectedTitle = "Learningngtestingprof";

    homePage.getTitleText().then(actualTitle => {
      expect(expectedTitle).toBe(actualTitle);
    });
  });
});
