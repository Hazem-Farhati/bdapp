import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreatePublicationComponent } from './create-publication.component';

describe('CreatePublicationComponent', () => {
  let component: CreatePublicationComponent;
  let fixture: ComponentFixture<CreatePublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule],
      declarations: [ CreatePublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
