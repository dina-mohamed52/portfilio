import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave-svg',
  standalone: true,
  imports: [],
  templateUrl: './wave-svg.component.html',
  styleUrl: './wave-svg.component.css'
})
export class WaveSvgComponent {
  @Input() fillcolor: any;
}
