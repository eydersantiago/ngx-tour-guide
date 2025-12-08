import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApendiceComponent } from './apendice.component';

describe('ApendiceComponent', () => {
  let component: ApendiceComponent;
  let fixture: ComponentFixture<ApendiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApendiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApendiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
