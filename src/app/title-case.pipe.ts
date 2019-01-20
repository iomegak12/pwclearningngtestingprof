import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pwcTitleCase"
})
export class PwCTitleCasePipe implements PipeTransform {
  private toTitleCase(str: any): any {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  transform(value: any, args?: any): any {
    const processedResult = this.toTitleCase(value);

    return processedResult;
  }
}
