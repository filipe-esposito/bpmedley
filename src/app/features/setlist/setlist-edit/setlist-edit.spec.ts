import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlistEdit } from './setlist-edit';

describe('SetlistEdit', () => {
  let component: SetlistEdit;
  let fixture: ComponentFixture<SetlistEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetlistEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetlistEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
