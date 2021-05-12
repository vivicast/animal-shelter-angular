import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '@core/http.service';
import {Adopter} from './adopter.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class AdopterService {

  constructor(private httpService: HttpService) {
  }

  findAll(): Observable<Adopter[]> {
    return this.httpService.get(EndPoints.ADOPTERS);
  }

  create(adopter: Adopter): Observable<Adopter> {
    return this.httpService.post(EndPoints.ADOPTERS, adopter);
  }

  read(adopterNif: string): Observable<Adopter> {
    return this.httpService.get(EndPoints.ADOPTERS + '/' + adopterNif);
  }

  update(oldAdopterNif: string, adopter: Adopter): Observable<Adopter> {
    return this.httpService.put(EndPoints.ADOPTERS + '/' + oldAdopterNif, adopter);
  }

  delete(adopterNif: string): Observable<void> {
    return this.httpService.delete(EndPoints.ADOPTERS + '/' + adopterNif);
  }
}
