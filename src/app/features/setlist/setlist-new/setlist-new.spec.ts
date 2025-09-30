import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlistNew } from './setlist-new';

describe('SetlistNew', () => {
  let component: SetlistNew;
  let fixture: ComponentFixture<SetlistNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetlistNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetlistNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
