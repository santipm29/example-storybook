import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() type?: 'button' | 'reset' | 'submit' | 'menu';
  @Input() color!: 'primary' | 'secondary';
  @Output()
  clickedButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clickedButton.emit();
  }
}
