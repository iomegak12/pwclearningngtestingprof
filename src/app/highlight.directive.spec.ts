import { TestBed } from "@angular/core/testing";
import { DummyComponent } from "./dummy/dummy.component";
import { HighlightDirective } from "./highlight.directive";
import { By } from "@angular/platform-browser";

describe("Highlight Directive Test Suite", () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent, HighlightDirective]
    });
  });

  it("Should directive render with property HTML attributes", () => {
    TestBed.compileComponents().then(() => {
      const componentFixture = TestBed.createComponent(DummyComponent);
      const component = componentFixture.componentInstance;

      componentFixture.detectChanges();

      const debugElement = componentFixture.debugElement;
      const element = debugElement.query(By.directive(HighlightDirective));
      const actualBackgroundColor = element.nativeElement.style.backgroundColor;
      const expectedBackgroundColor = "skyblue";

      expect(expectedBackgroundColor).toBe(actualBackgroundColor);
    });
  });
});
