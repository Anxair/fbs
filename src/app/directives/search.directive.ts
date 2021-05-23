import {Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[search]'
})
export class SearchDirective implements OnInit, OnChanges, OnDestroy {

  @Input() search = '';
  $valueStream: Subject<string> = new Subject<string>();
  private subscription: Subscription;

  constructor(
    private el: ElementRef,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.$valueStream.pipe(debounceTime(500)).subscribe(value =>
      this.highLightText(value)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.$valueStream.next(this.search);
  }

  highLightText(text: string): void {
    const value = this.el.nativeElement?.innerText.split('\n').join('');
    if (!value) {
      return;
    }
    const re = new RegExp(text, 'gi');
    const match = value.match(re);
    if (!match || match.some(x => !x)) {
      this.el.nativeElement.innerText = value;
    } else {
      this.el.nativeElement.innerHTML = value.replace(re, '<b>' + match[0] + '</b>');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
