import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'home/landingscreen', component: LandingscreenComponent },

  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
