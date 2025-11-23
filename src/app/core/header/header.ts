import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements AfterViewInit, OnDestroy {
  isHome = false;
  private onScroll = () => {
    if (typeof window !== 'undefined') {
      const bg = document.getElementById('parallax-bg');
      if (bg) {
        const offset = window.scrollY * 0.5;
        bg.style.transform = `translateY(${offset}px)`;
      }
    }
  };

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.urlAfterRedirects === '/';
      }
    });
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll);
    }
  }
  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
}
