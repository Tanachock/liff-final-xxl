import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopanimeComponent } from './topanime.component';

describe('TopanimeComponent', () => {
  let component: TopanimeComponent;
  let fixture: ComponentFixture<TopanimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopanimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
