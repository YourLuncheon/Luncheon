import { Directive, OnInit, DoCheck, Input, SimpleChanges, } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LABEL_LIST } from '../../constants/label-list.constants';

@Directive()
export abstract class BaseFormComponent implements OnInit, DoCheck {

    /** INPUT OBJECTS FROM PARENT */
    @Input() fieldId: string | null = null;
    @Input() control: AbstractControl | null = null;
    @Input() labelType: string = '';

    /* STATE OBJECTS */
    label: string | null = null;
    validationErrors: object = null;

    ngOnInit() {
        this.label = LABEL_LIST[this.labelType] ? LABEL_LIST[this.labelType] : '';
    }

    /**
     * 
     * @param changes 
     */
    ngOnChanges(changes: SimpleChanges) {
        console.log("old called");
        if (changes.labelType) {
            this.label = LABEL_LIST[this.labelType] ? LABEL_LIST[this.labelType] : '';
        }
    }

    ngDoCheck() {
        /* If control is touched and invalid then set the validationErrors object from control's errors*/
        this.validationErrors = this.control.touched && this.control.invalid ? this.control['errors'] : null;
    }
}
