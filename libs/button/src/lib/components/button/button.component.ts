import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: '[byt-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.byt-primary]': 'color === "primary"',
    '[class.byt-negative]': 'color === "negative"'
  }
})
export class BytButtonComponent implements OnInit, OnDestroy {

  /** Define appearance of the button */
  @Input() color: 'primary' | 'negative' = 'primary';

  constructor(private readonly _elementRef: ElementRef<HTMLButtonElement>, private readonly _focusMonitor: FocusMonitor) { }
  
  ngOnInit(): void {
    this._focusMonitor.monitor(this._elementRef);
  }
  
  ngOnDestroy(): void {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
}
