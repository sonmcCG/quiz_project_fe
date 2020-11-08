import { NgModule } from '@angular/core'; 

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExamComponent } from './exam.component';
import { ExamRouting } from './exam.routing';


@NgModule({
  imports: [
    ExamRouting,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [ExamComponent]
})
export class EmployeeModule { }
