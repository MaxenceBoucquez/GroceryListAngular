import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  schemas : [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
