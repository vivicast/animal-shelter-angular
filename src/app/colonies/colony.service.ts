import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '@core/http.service';
import {Colony} from './colony.model';
import {EndPoints} from '@shared/end-points';
import {ColonySearch} from './colony-search.model';

@Injectable({
  providedIn: 'root',
})
export class ColonyService {

  constructor(private httpService: HttpService) {
  }

  search(colonySearch: ColonySearch): Observable<Colony[]> {
    return this.httpService
      .paramsFrom(colonySearch)
      .get(EndPoints.COLONIES);
  }

  create(colony: Colony): Observable<Colony> {
    return this.httpService.post(EndPoints.COLONIES, colony);
  }

  read(registry: number): Observable<Colony> {
    return this.httpService.get(EndPoints.COLONIES + '/' + registry);
  }

  update(oldRegistry: number, colony: Colony): Observable<Colony> {
    return this.httpService.put(EndPoints.COLONIES + '/' + oldRegistry, colony);
  }

  delete(registry: number): Observable<void> {
    return this.httpService.delete(EndPoints.COLONIES + '/' + registry);
  }
}
