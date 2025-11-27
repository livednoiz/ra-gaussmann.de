import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import maplibregl from 'maplibre-gl';

@Component({
  selector: 'contact-map',
  standalone: true,
  templateUrl: './contact-map.html',
  styleUrls: ['./contact-map.css']
})
export class ContactMap implements AfterViewInit {
  @ViewChild('map', { static: false }) mapContainer!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      if (!this.mapContainer?.nativeElement) return;
      this.initMap();
    });
  }

  private initMap() {
    const map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: 'https://tiles.stadiamaps.com/styles/osm_bright.json?api_key="f4a2b3f6-c7bd-470b-a296-96cd99ab1249"',
      center: [11.843935, 48.813252],
      zoom: 15
    });

    new maplibregl.Marker()
      .setLngLat([11.843935, 48.813252])
      .addTo(map);
  }
}
