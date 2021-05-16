import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class SharedColonyService {
  private static REGISTRY = '/registry';

  constructor(private httpService: HttpService) {
  }

  findByColonyRegistry(colonyRegistry: string): Observable<string[]> {
    return this.httpService
      .param('registry', String(colonyRegistry))
      .get(EndPoints.COLONIES + SharedColonyService.REGISTRY)
      .pipe(
        map(response => response.colonyRegistries)
      );
  }
}
