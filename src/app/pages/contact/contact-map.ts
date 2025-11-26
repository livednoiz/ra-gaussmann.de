import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import maplibregl from 'maplibre-gl';

@Component({
  selector: 'contact-map',
  standalone: true,
  templateUrl: './contact-map.html',
  styleUrls: ['./contact-map.css']
})
export class ContactMap implements AfterViewInit {
  @ViewChild('map', { static: true }) mapContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      const map = new maplibregl.Map({
        container: this.mapContainer.nativeElement,
        style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
        center: [11.843935, 48.813252], // lon, lat (Abensberg)
        zoom: 15
      });

      new maplibregl.Marker()
        .setLngLat([11.843935, 48.813252])
        .addTo(map);
    }
  }
}
