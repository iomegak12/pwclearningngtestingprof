import { Directive, Input, ElementRef, OnChanges } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective implements OnChanges {
  private defaultColor = "rgb(211,211,211)";

  @Input("appHighlight") public highlightColor: string;

  constructor(private element: ElementRef) {
    if (this.element !== null) {
      this.element.nativeElement.style.customProperty = true;
    }
  }

  ngOnChanges() {
    this.element.nativeElement.style.backgroundColor =
      this.highlightColor || this.defaultColor;
  }
}
