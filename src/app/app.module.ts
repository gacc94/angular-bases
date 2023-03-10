import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { ContadorModule } from './components/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HeroesModule,
        ContadorModule,
        DbzModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
