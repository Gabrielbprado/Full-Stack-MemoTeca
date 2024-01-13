import { Routes } from '@angular/router';
import { ThoughtsCreatedComponent } from './components/thoughts/thoughts-created/thoughts-created.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'listarPensamentos',
        pathMatch : 'full'
    },
    {
        path : 'criarPensamento',
        component: ThoughtsCreatedComponent
    },
    {
        path : 'listarPensamentos',
        component: ListThoughtsComponent
    },
];
