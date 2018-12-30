import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemPage } from './edit-item';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    EditItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemPage),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
})
export class EditItemPageModule {}
