import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const routes: Routes = [
    {path:"auth/signup", component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:'search',component:SearchPageComponent},
    {path:'',redirectTo:'search',pathMatch:'full'}
];
