import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageenComponent } from './messageen.component';

describe('MessageenComponent', () => {
  let component: MessageenComponent;
  let fixture: ComponentFixture<MessageenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
