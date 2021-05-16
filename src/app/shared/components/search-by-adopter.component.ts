import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SharedAdopterService} from '@shared/services/shared.adopter.service';

@Component({
  selector: 'app-search-by-adopter',
  templateUrl: './search-by-adopter.component.html'
})
export class SearchByAdopterComponent {
  adopterNifs: Observable<string[]> = of([]);

  @Input() adopterNif: string;
  @Output() adopterNifChange = new EventEmitter<string>();

  constructor(private sharedAdopterService: SharedAdopterService) {
  }

  public onSelect(): void {
    this.adopterNifChange.emit(this.adopterNif);
  }

  searchByAdopterNif(): void {
    this.adopterNifs = this.sharedAdopterService.searchByAdopterNif(this.adopterNif);
  }
}
