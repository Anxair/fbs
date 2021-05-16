import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Directive({
  selector: '[allSize]'
})
export class AllSizeWinDirective implements OnInit {

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.renderer.setStyle(this.element.nativeElement, 'overflow', 'auto');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(this.changeSize.bind(this));
    this.changeSize();
  }

  private changeSize(): void {
    const top = this.element.nativeElement.getBoundingClientRect().top;
    const left = this.element.nativeElement.getBoundingClientRect().left;
    const sizeHeight = (window.visualViewport.height);
    const sizeWidth = (window.visualViewport.width);
    this.renderer.setStyle(this.element.nativeElement, 'height', (sizeHeight - top) + 'px');
    this.renderer.setStyle(this.element.nativeElement, 'width', (sizeWidth - left) + 'px');
  }

  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe();
  }
}
