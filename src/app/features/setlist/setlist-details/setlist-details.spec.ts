import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlistDetails } from './setlist-details';

describe('SetlistDetails', () => {
  let component: SetlistDetails;
  let fixture: ComponentFixture<SetlistDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetlistDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetlistDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
