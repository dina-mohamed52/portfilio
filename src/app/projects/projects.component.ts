import { NavigationEnd, Router } from '@angular/router';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @ViewChild('animatedElement') animatedElement!: ElementRef;

  constructor(private router: Router) {}
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
