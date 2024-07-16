import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormComponent } from './formulaire_module/form/form.component';

export const routes: Routes = [
    {path:'', component:AccueilComponent},
    {path:'formulaire', component:FormComponent},
];
