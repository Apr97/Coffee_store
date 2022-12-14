import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { StoreComponent } from './store.component';

const routes: Routes = [
  { path: '', component: StoreComponent, children: [
    { path: '', redirectTo: 'store-page', pathMatch: 'full' },
    { path: 'store-page', component:CoffeeListComponent  },
  ], },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
