import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenttwoComponent } from './contenttwo.component';

describe('ContenttwoComponent', () => {
  let component: ContenttwoComponent;
  let fixture: ComponentFixture<ContenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
