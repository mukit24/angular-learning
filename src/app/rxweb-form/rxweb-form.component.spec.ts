import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxwebFormComponent } from './rxweb-form.component';

describe('RxwebFormComponent', () => {
  let component: RxwebFormComponent;
  let fixture: ComponentFixture<RxwebFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxwebFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxwebFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
