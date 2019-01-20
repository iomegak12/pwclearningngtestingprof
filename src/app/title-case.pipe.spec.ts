import { TitleCasePipe } from "@angular/common";

xdescribe("Titlecase Pipe Test Suite", () => {
  let pipeObject: TitleCasePipe;

  beforeEach(() => {
    pipeObject = new TitleCasePipe();
  });

  it("Should transform() return valid result", () => {
    const input = "PwC bangalore";
    const expectedOutput = "Pwc Bangalore";
    const actualOutput = pipeObject.transform(input);

    expect(actualOutput).toBeTruthy();
    expect(expectedOutput).toBe(actualOutput);
  });

  afterEach(() => {
    pipeObject = null;
  });
});
