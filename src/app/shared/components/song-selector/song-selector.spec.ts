import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSelector } from './song-selector';

describe('SongSelector', () => {
  let component: SongSelector;
  let fixture: ComponentFixture<SongSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
