import { Routes } from '@angular/router';
import { SearchBusComponent } from './components/search-bus/search-bus.component';
import { BusSearchComponent } from './components/bus-search/bus-search.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'search', pathMatch: 'full'
    },
    {
        path: 'search', component: SearchBusComponent
    },
    {
        path: 'search-bus', component: BusSearchComponent
    }
];
