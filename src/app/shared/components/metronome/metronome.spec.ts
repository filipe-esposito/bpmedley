import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metronome } from './metronome';

describe('Metronome', () => {
  let component: Metronome;
  let fixture: ComponentFixture<Metronome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metronome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metronome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
