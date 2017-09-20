import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private er:ElementRef,
    private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.er.nativeElement, 'highlight');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.er.nativeElement, 'highlight');
  }
}
