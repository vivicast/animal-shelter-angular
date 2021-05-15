import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '@core/http.service';
import {Cat} from './cat.model';
import {EndPoints} from '@shared/end-points';
import {CatSearch} from './cat-search.model';

@Injectable({
  providedIn: 'root',
})
export class CatService {

  constructor(private httpService: HttpService) {
  }

  search(catSearch: CatSearch): Observable<Cat[]> {
    return this.httpService
      .paramsFrom(catSearch)
      .get(EndPoints.CATS);
  }

  create(cat: Cat): Observable<Cat> {
    return this.httpService.post(EndPoints.CATS, cat);
  }

  read(chip: number): Observable<Cat> {
    return this.httpService.get(EndPoints.CATS + '/' + chip);
  }

  update(oldCatChip: number, cat: Cat): Observable<Cat> {
    return this.httpService.put(EndPoints.CATS + '/' + oldCatChip, cat);
  }

  delete(chip: number): Observable<void> {
    return this.httpService.delete(EndPoints.CATS + '/' + chip);
  }
}
