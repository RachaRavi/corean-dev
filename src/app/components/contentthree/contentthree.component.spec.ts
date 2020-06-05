import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentthreeComponent } from './contentthree.component';

describe('ContentthreeComponent', () => {
  let component: ContentthreeComponent;
  let fixture: ComponentFixture<ContentthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
