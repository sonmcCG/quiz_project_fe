import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { QuestionComponent } from './question.component';
 

const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    data: {
      title: 'QUestion'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRouting { }
