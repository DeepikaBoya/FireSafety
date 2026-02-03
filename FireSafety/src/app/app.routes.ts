import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services.component';
import { NetworkComponent } from './network.component';
import { GalleryComponent } from './gallery.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'network', component: NetworkComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: '' }
];
