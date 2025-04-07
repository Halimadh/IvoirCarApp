import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  standalone: true
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    return value.filter(v =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
