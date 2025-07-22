import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private viewportScroller = inject(ViewportScroller);
  isCollapsed = true;
  activeSection = '';
  private scrollListener!: () => void;

  ngOnInit() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  scrollTo(section: string) {
    this.activeSection = section;
    this.viewportScroller.scrollToAnchor(section);
    this.isCollapsed = true;

    // Smooth scroll with offset for fixed navbar
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = -70; // Adjust based on your navbar height
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 0);
  }

  private setupScrollListener() {
    this.scrollListener = () => this.detectActiveSection();
    window.addEventListener('scroll', this.scrollListener);
  }

  private detectActiveSection() {
    const sections = ['home', 'profile', 'education', 'skills', 'portfolio'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
