import { Pipe, PipeTransform } from '@angular/core';

export interface ST {
  distance: number,
  time: number,
}

@Pipe({
  name: 'velocity'
})
export class VelocityPipe implements PipeTransform {

  transform(dt: ST): unknown {
    return dt.distance / dt.time;
  }

}
