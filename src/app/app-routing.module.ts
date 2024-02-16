import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectAllocationComponent } from './project-allocation/project-allocation.component';
import { InformationsComponent } from './informations/informations.component';


const routes: Routes = [
  { path: 'informations', component: InformationsComponent, children: [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
]},
  { path: 'project-allocation', component: ProjectAllocationComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    
]},
  { path: '', redirectTo: 'informations', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
