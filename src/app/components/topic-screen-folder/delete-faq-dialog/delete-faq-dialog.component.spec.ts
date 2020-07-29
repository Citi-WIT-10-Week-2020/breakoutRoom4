import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFaqDialogComponent } from './delete-faq-dialog.component';

describe('DeleteFaqDialogComponent', () => {
  let component: DeleteFaqDialogComponent;
  let fixture: ComponentFixture<DeleteFaqDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
