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

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        GalleryComponent,
        ContactComponent,
        BlogComponent,
        AboutComponent,
        FooterComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}
