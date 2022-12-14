import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';

import { StoreComponent } from './store.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  declarations: [  
    StoreComponent,
    CoffeeListComponent
   ],
  imports: [
    StoreRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class StoreModule { }
