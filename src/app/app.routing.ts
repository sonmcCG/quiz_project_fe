import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './views/layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { AdminGuard } from './containers/guards/admin/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  }, {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'user',
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
       // canActivate: [AdminGuard]
      } ,
      {
        path: 'question',
        loadChildren: () => import('./views/question/question.module').then(m => m.QuestionModule),
       // canActivate: [AdminGuard]
      } ,      {
        path: 'exam',
        loadChildren: () => import('./views/exam/exam.module').then(m => m.EmployeeModule),
        //canActivate: [AdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AdminGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
