import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
  pure: false
})
export class UniquePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value !== undefined && value !== null) {
      const result = [];
      const uniqueMap = new Map();
      for (const item of value) {
        if (!uniqueMap.has(item[args])) {
          uniqueMap.set(item[args], true);
          result.push(item[args]);
        }
      }
      return result;
    }
    return value;
  }
}
