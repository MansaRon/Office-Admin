import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0) {
      return value
    }
    const result = [];
    console.log(value);
    console.log(filterString);
    for (const item of value) {
      console.log(item);
      if (item.name === filterString) {
        result.push(item);
      }
    }
    return result;
  }

  // transform(items: any[], field: string, value: string): any[] {
  //   if (!items) {
  //     return [];
  //   }
  //   if (!field || !value) {
  //     return items;
  //   }
  //   return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
  // }

}
