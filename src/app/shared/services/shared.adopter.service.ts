import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class SharedAdopterService {
  private static NIF = '/nif';

  constructor(private httpService: HttpService) {
  }

  searchByAdopterNif(adopterNif: string): Observable<string[]> {
    return this.httpService
      .param('nif', adopterNif)
      .get(EndPoints.ADOPTERS + SharedAdopterService.NIF)
      .pipe(
        map(response => response.adopterNifs)
      );
  }
}
