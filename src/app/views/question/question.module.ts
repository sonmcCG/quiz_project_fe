import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { QuestionComponent } from './question.component';
import { QuestionRouting } from './question-routing';


@NgModule({
  imports: [
    QuestionRouting,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [QuestionComponent]
})
export class QuestionModule { }
