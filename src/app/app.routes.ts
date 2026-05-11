import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ClientServices } from './pages/client-services/client-services';
import { AboutUs } from './pages/about-us/about-us';
import { Details } from './pages/details/details';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'services', component: ClientServices},
    {path: 'about-us', component: AboutUs},
    {path: 'services/:name', component: Details},
];
