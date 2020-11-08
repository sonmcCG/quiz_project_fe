import { NgModule } from '@angular/core'; 

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserComponent } from './user.component';
import { UserRouting } from './user-routing';


@NgModule({
  imports: [
    UserRouting,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [UserComponent]
})
export class UserModule { }