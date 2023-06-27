import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunkArray'
})
export class ChunkArrayPipe implements PipeTransform {
  transform(array: any[], chunkSize: number): any[][] {
    if (!Array.isArray(array)) {
      return [];
    }

    const chunks = [];
    let index = 0;

    while (index < array.length) {
      chunks.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    }

    return chunks;
  }
}
