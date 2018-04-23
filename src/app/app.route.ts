

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './drag-drop/home.component'

const appRoutes: Routes = [
  {path: 'home',        component: HomeComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
