import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  goHome() {
    document.getElementById('home')?.scrollIntoView();
  }
  goAbout() {
    document.getElementById('about')?.scrollIntoView();
  }
  goServices() {
    document.getElementById('services')?.scrollIntoView();
  }
  goSkills() {
    document.getElementById('skills')?.scrollIntoView();
  }
  goProjects() {
    document.getElementById('projects')?.scrollIntoView();
  }
  goContact() {
    document.getElementById('contact')?.scrollIntoView();
  }
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.updateStyles();
    window.addEventListener('resize', () => {
      this.updateStyles();
    });
  }

  private updateStyles(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      // Small screens
      this.renderer.setStyle(this.nav.nativeElement, 'font-size', '14px');
      // Add more styles for small screens
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Medium screens
      this.renderer.setStyle(this.nav.nativeElement, 'font-size', '16px');
      // Add more styles for medium screens
    } else {
      // Large screens
      this.renderer.setStyle(this.nav.nativeElement, 'font-size', '18px');
      // Add more styles for large screens
    }
  }
}
