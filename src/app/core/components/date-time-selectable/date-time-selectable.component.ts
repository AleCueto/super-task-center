import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { CoreModule } from '../../core.module';
import { Assignment } from '../../models/assignments.model';
import { AssignmentsService } from '../../services/assignments.service';


export const TIME_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
};
@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
  providers: [TIME_PROFILE_VALUE_ACCESSOR]
})



export class DateTimeSelectableComponent implements OnInit, ControlValueAccessor {

  propagateChange = (_: any) => { }
  selectedDateTime = null;
  isDisabled:boolean = false;

  constructor() { }

  ngOnInit() {}

  writeValue(value: any): void {
    this.selectedDateTime = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onDateTimeChanged(event, accordion:IonAccordionGroup){
    this.selectedDateTime = event.detail.value;
    accordion.value='';
    this.propagateChange(this.selectedDateTime);
  }

  onCancel(datetime:IonDatetime, accordion){
    datetime.cancel();
    accordion.value='';
  }

  onConfirm(datetime:IonDatetime, accordion){
    datetime.confirm();
  }

  



//   ngOnInit() {}



//   //propagate changes into the custom form control
//   propagateChange = (fn: any) => {
//     this.propagateChange = fn;
//   }

//   //From ControlValueAccessor interface
//   writeValue(value: any) {
//     this.selectedDateTime = value;
//     // console.log("eferf");
// }

// //From ControlValueAccessor interface
// registerOnChange(fn: any) {
//     // this.propagateChange = fn;
// }

//   setDisabledState?(isDisabled: boolean): void {
//     this.isDisabled = isDisabled;
//   }

//   // getTime(){
//   //   return this.selectedDateTime
//   // }

//   onDateTimeChanged(event, accordion:IonAccordionGroup){
//     this.selectedDateTime = event.detail.value;
//     accordion.value='';
//     this.propagateChange(this.selectedDateTime);
//   }


//   onCancel(datetime:IonDatetime, accordion){
//     datetime.cancel();
//     accordion.value='';
//   }

//   onConfirm(datetime:IonDatetime, accordion){
//     datetime.confirm();
//   }



//From ControlValueAccessor interface
// registerOnTouched(fn: any) {

// }


}
