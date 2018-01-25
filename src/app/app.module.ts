import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MoviesComponent} from './components/movies/movies.component';

const appRoutes: Routes = [
    {path: '', component: MoviesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        NavbarComponent,
        MoviesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
