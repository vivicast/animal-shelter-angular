import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {HttpService} from '@core/http.service';
import {Adopter} from './adopter.model';

@Injectable({
  providedIn: 'root',
})
export class AdopterService {
  testAdopters = [
    { name: 'adopter1', nif: '00000001', address: 'address1', birthDay: new Date(Date.now())},
    { name: 'adopter2', nif: '00000002', address: 'address2', birthDay: new Date(Date.now())}
  ];

  constructor(private httpService: HttpService) {
  }

  findAll(): Observable<Adopter[]> {
    return of(this.testAdopters);
  }

  create(adopter: Adopter): Observable<Adopter> {
    return of();
  }

  read(adopterNif: string): Observable<Adopter> {
    return of(this.testAdopters[0]);
  }

  update(oldAdopterNif: string, adopter: Adopter): Observable<Adopter> {
    return of();
  }

  delete(nif: string): Observable<void> {
    return EMPTY;
  }
}
