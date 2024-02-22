import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { WaveSvgComponent } from '../features/wave-svg/wave-svg.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [WaveSvgComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {

  constructor(private router: Router) {

  }

  @ViewChild('animatedElement') animatedElement!: ElementRef;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.animateElements();
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.animateElements();
  }

  animateElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElement = entry.target as HTMLElement;
          const animation = animatedElement.getAttribute('data-animation');
          animation && animatedElement.classList.add(animation);
        } else {
          const animatedElement = entry.target as HTMLElement;
          const animation = animatedElement.getAttribute('data-animation');
          animation && animatedElement.classList.remove(animation);
        }
      });
    });

    document.querySelectorAll('[data-animation]').forEach((element) => {
      observer.observe(element);
    });
  }
}
