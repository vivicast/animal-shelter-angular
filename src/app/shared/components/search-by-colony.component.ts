import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SharedColonyService} from '@shared/services/shared.colony.service';

@Component({
  selector: 'app-search-by-colony',
  templateUrl: './search-by-colony.component.html'
})
export class SearchByColonyComponent {
  colonyRegistries: Observable<string[]> = of([]);

  @Input() disabled = false;
  @Input() colonyRegistry: string;
  @Output() colonyRegistryChange = new EventEmitter<string>();

  constructor(private sharedColonyService: SharedColonyService) {
  }

  onSelect(): void {
    this.colonyRegistryChange.emit(this.colonyRegistry);
  }

  searchByColonyRegistry(): void {
    this.colonyRegistries = this.sharedColonyService.findByColonyRegistry(this.colonyRegistry);
  }
}
