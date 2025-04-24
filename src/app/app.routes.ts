import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { DetaljiFilmaComponent } from './detalji-filma/detalji-filma.component';
import { KorpaComponent } from './korpa/korpa.component';
import { ProfilComponent } from './profil/profil.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PrijavaComponent } from './components/auth-pages/prijava/prijava.component';
import { RegistracijaComponent } from './components/auth-pages/registracija/registracija.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'pretraga', component: PretragaComponent },
  { path: 'film/:id', component: DetaljiFilmaComponent }, 
  { path: 'korpa', component: KorpaComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: '**', redirectTo: '' }
];

