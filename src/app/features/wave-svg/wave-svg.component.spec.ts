import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveSvgComponent } from './wave-svg.component';

describe('WaveSvgComponent', () => {
  let component: WaveSvgComponent;
  let fixture: ComponentFixture<WaveSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaveSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
