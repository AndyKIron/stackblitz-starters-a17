import {Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange/v3';
import { DaterangeSelection } from '@ironsource/fusion-ui/components/daterange/entities';


@Component({
    selector: 'app-story-wrapper',
    standalone: true,
    imports: [ReactiveFormsModule, DaterangeModule],
    template: `
        <div style="height: 380px; width: 250px;">
        <fusion-daterange
          [formControl]="formControl"
        ></fusion-daterange>
        </div>`,
})

export class WrapperComponent {
    formControl: FormControl<DaterangeSelection> = new FormControl();

}
