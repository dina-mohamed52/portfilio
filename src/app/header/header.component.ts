import { TypedDynamicDirective } from './../features/typed-dynamic.directive';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { ContactIconComponent } from './contact-icon/contact-icon.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, TypedDynamicDirective,ContactIconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  downloadcv(e: Event) {
    e.preventDefault();
    const fileId = '1RDZOggZI3f00K9rcSXmmHkLQICbT9VRv';
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mycv.pdf';
    link.click();
  }
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
