import {Directive, OnInit, Inject, ElementRef, HostListener, Renderer} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";
@Directive({
  selector:'[fixed-navbar]'
})

export class HeaderDirectives implements OnInit{
  public navIsFixed: boolean = false;
  ngOnInit(){}

  constructor(@Inject(DOCUMENT) private document: Document, private elementref: ElementRef, private rendered: Renderer){}

  @HostListener("window:scroll",[])
  onWindowScroll(){
    let number = this.document.body.scrollTop;
    if (number > 500) {
      this.navIsFixed = true;
      this.rendered.setElementStyle(this.elementref.nativeElement,'background-color','rgba(255,255,255,0.5)');
      console.log("scrolling");

    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
      console.log("not scrolling");
      this.rendered.setElementStyle(this.elementref.nativeElement,'background-color','rgba(0,0,0,0.3)');
    }
  }
}
