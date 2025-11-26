import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  
  services: ServiceItem[] = [
    {
      title: 'Familienrecht',
      description: 'Scheidung, Unterhalt, Sorgerecht, Umgangsrecht, Gewaltschutz. Kompetente Begleitung in schwierigen Lebenssituationen.',
      icon: 'fa-solid fa-people-roof'
    },
    {
      title: 'Erbrecht',
      description: 'Testament, Erbfolge, Pflichtteil, Erbauseinandersetzungen – klare Lösungen für komplexe Nachlassfragen.',
      icon: 'fa-solid fa-scroll'
    },
    {
      title: 'Mietrecht',
      description: 'Mieterhöhung, Kündigung, Mängel, Räumung, Betriebskosten. Unterstützung für Mieter und Vermieter.',
      icon: 'fa-solid fa-house-chimney'
    },
    {
      title: 'Arbeitsrecht',
      description: 'Kündigungsschutz, Abmahnung, Arbeitsverträge, Abfindung, Diskriminierung am Arbeitsplatz.',
      icon: 'fa-solid fa-briefcase'
    },
    {
      title: 'Verkehrsrecht',
      description: 'Unfallregulierung, Bußgelder, Führerschein, Sachschäden, Personenschäden, Ordnungswidrigkeiten.',
      icon: 'fa-solid fa-car-burst'
    },
    {
      title: 'Strafrecht',
      description: 'Verteidigung in Ermittlungs- und Strafverfahren – professionell, entschlossen, diskret.',
      icon: 'fa-solid fa-scale-balanced'
    },
    {
      title: 'Sozialrecht',
      description: 'Arbeitslosengeld, Rentenansprüche, Schwerbehinderung, Krankenversicherung, Widerspruchsverfahren.',
      icon: 'fa-solid fa-hand-holding-heart'
    }
  ];
}
