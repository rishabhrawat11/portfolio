import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import {routing} from "./app.route";
import {HomeComponent} from "./components/home/home.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogComponent} from "./components/blog/blog.component";
import {AboutComponent} from "./components/about/about.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderDirectives} from "./components/header/header.directive";
import {Ng2PageScrollModule} from "ng2-page-scroll";
import {ng2parallax} from "./components/directives/ng2ParallaxDirectives";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        GalleryComponent,
        ContactComponent,
        BlogComponent,
        AboutComponent,
        FooterComponent,
        HeaderDirectives,
        ng2parallax


    ],
    imports: [BrowserModule, routing, Ng2PageScrollModule.forRoot()],
    bootstrap: [AppComponent]
})
export class AppModule {

}
