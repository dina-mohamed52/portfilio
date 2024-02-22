import { NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  showFullText = false;
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
