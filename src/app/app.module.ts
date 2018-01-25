import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MoviesComponent} from './shared/components/movies/movies.component';
import {SharedModule} from './shared/shared.module';
import {SearchModule} from './search/search.module';
import {SearchComponent} from './search/components/search/search.component';
import {SearchpageComponent} from './search/components/searchpage/searchpage.component';

const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'search/', component: MoviesComponent},
    {path: 'search/:term', component: SearchpageComponent}
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
        ),
        SharedModule,
        SearchModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
