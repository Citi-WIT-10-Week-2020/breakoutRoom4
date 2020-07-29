import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFaqDialogComponent } from './update-faq-dialog.component';

describe('UpdateFaqDialogComponent', () => {
  let component: UpdateFaqDialogComponent;
  let fixture: ComponentFixture<UpdateFaqDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
