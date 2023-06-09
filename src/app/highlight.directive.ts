import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEneter(){
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('white');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
