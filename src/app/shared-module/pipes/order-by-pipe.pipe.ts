import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(value: [], ...args: string[]): unknown {
    const [ sortBy, sortType] = args;
    if(sortType === "ascending") {
      value.sort((a, b) => {
        if( a[sortBy] > b[sortBy]) {
          return 1;
        }
        if( a[sortBy] < b[sortBy]) {
          return -1;
        }
        return 0;
      })
    }

    if(sortType === "descending") {
      value.sort((a, b) => {
        if( a[sortBy] < b [sortBy]) {
          return 1;
        }
        if( a[sortBy] > b[sortBy]) {
          return -1;
        }
        return 0;
      })
    }

    return value;
  }

}
