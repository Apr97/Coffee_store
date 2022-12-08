import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [
    HomeScreenComponent,
    LoginScreenComponent,
    AppComponent,
    HeaderComponent,
    LandingscreenComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
