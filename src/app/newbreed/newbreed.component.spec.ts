import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbreedComponent } from './newbreed.component';

describe('NewbreedComponent', () => {
  let component: NewbreedComponent;
  let fixture: ComponentFixture<NewbreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
