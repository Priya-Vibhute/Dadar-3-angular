import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DirectivesComponent } from './components/directives/directives.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"data-binding",
        component:DataBindingComponent
    },
    {
        path:'directives',
        component:DirectivesComponent
    }

];
