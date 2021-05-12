import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptersComponent } from './adopters.component';
import {MatDialog} from '@angular/material/dialog';
import {AdopterService} from './adopter.service';

describe('AdoptersComponent', () => {
  let component: AdoptersComponent;
  let fixture: ComponentFixture<AdoptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ MatDialog, AdopterService ],
      declarations: [ AdoptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
