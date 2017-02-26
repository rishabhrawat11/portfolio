import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";


const PORT_ROUTES : Routes = [
    {path: '', component: HomeComponent},
    {path:'gallery', component: GalleryComponent},
    {path:'blogs', component: BlogComponent},
    {path:'contact', component: ContactComponent},
    {path:'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(PORT_ROUTES);