import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements AfterViewInit, OnDestroy {
  isHome = false;

  private onScroll = () => {
    if (typeof window !== 'undefined') {
      const bg = document.getElementById('parallax-bg');
      if (bg) {
        const offset = window.scrollY * 0.25;
        bg.style.transform = `translate3d(0, ${offset}px, 0)`;
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
