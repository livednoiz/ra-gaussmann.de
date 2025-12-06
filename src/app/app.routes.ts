import { Routes } from '@angular/router';

// Importing components for the routes
import { Home } from './pages/home/home';
// import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';
import { Imprint } from './pages/imprint/imprint';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { 
    path: '', component: Home, 
    title: 'Kanzlei Gaussmann – Startseite'
  },
  // {
  //   path: 'ueber', component: About,
  //   title: 'Über die Kanzlei – Rechtsanwalt Gaussmann'
  // },
  {
    path: 'leistungen', component: Services,
    title: 'Rechtsgebiete – Kanzlei Gaussmann'
  },
  {
    path: 'kontakt', component: Contact,
    title: 'Kontakt & Anfahrt – Kanzlei Gaussmann'
  },
  {
    path: 'impressum', component: Imprint,
    title: 'Impressum – Kanzlei Gaussmann'
  },
  {
    path: 'datenschutz', component: Privacy,
    title: 'Datenschutz – Kanzlei Gaussmann'
  },
  {
    path: '**',
    redirectTo: ''
  }
];