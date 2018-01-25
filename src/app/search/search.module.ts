import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import {SearchpageComponent} from './components/searchpage/searchpage.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        SearchComponent,
        SearchpageComponent
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {
}


