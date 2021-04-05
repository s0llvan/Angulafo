import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowTopicComponent } from './show-topic.component';

describe('ShowTopicComponent', () => {
  let component: ShowTopicComponent;
  let fixture: ComponentFixture<ShowTopicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
