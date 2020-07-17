import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicScreenComponent } from './topic-screen.component';

describe('TopicScreenComponent', () => {
  let component: TopicScreenComponent;
  let fixture: ComponentFixture<TopicScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
