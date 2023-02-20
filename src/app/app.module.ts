import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { RedessocialesComponent } from './components/redessociales/redessociales.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeMiComponent } from './components/components/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './components/components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { HysComponent } from "./components/hys/hys.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        RedessocialesComponent,
        BannerComponent,
        AcercaDeMiComponent,
        ExperienciaComponent,
        EducacionComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgCircleProgressModule.forRoot({}),
    ]
})
export class AppModule { }
