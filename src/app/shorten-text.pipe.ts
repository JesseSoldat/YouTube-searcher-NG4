import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortenText'})
export class ShortenTextPipe implements PipeTransform {
  transform(item, filter) {
    if(!item || !filter) {
      return item;
    }

    return this.applyFilter(item, filter);
  }
  applyFilter(item, filter) {
    if(item.length >= filter) {
      let newItem = item.substring(0, filter);
      return newItem + '...';
    }
    return item;
  }
}