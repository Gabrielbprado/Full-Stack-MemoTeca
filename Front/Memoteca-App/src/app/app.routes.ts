import { Routes } from '@angular/router';
import { ThoughtsCreatedComponent } from './components/thoughts/thoughts-created/thoughts-created.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtsComponent } from './components/thoughts/delete-thoughts/delete-thoughts.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

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
    {
        path: 'thougths/delete-pensamento/:id',
        component: DeleteThoughtsComponent
    },
    {
        path: 'thougths/edit-pensamento/:id',
        component: EditThoughtComponent
    }
];
