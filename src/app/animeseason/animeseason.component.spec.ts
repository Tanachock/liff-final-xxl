import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeseasonComponent } from './animeseason.component';

describe('AnimeseasonComponent', () => {
  let component: AnimeseasonComponent;
  let fixture: ComponentFixture<AnimeseasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeseasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeseasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
