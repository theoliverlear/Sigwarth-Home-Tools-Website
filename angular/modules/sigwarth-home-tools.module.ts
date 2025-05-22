import {NgModule} from "@angular/core";
import {AppComponent} from "../components/app/app.component";
import {elements} from "../components/elements/elements";
import {directives} from "../directives/directives";
import {pages} from "../components/pages/pages";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRouting} from "./routing/app-routing.module";
import {RouterOutlet} from "@angular/router";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {
    HttpClientModule,
    provideHttpClient,
    withFetch
} from "@angular/common/http";
import {services} from "../services/services";

@NgModule({
    declarations: [
        AppComponent,
        ...elements,
        ...directives,
        ...pages,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRouting,
        RouterOutlet,
        NgOptimizedImage,
        NgbCarouselModule,
        HttpClientModule
    ],
    exports: [],
    providers: [
        ...services,
        provideHttpClient(withFetch()),
    ],
    bootstrap: [AppComponent]
})
export class SigwarthHomeToolsModule {
    constructor() {

    }
}