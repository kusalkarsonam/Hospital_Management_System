import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [ 
{ path : ''  ,  component :LoginComponent},
{ path : 'app-login'  , component :LoginComponent},
{path:'app-register',component:RegisterComponent},
{path: 'admin-dashboard', component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
