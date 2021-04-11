import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[allSize]'
})
export class AllSizeWinDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'height', '100%');
    this.renderer.setStyle(this.element.nativeElement, 'overflow', 'auto');
  }

}
