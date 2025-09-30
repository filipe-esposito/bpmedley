import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlistList } from './setlist-list';

describe('SetlistList', () => {
  let component: SetlistList;
  let fixture: ComponentFixture<SetlistList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetlistList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetlistList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
