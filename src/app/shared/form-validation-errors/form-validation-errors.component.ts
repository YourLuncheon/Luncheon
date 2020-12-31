import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-validation-errors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-validation-errors.component.html',
  styleUrls: ['./form-validation-errors.component.scss']
})
export class FormValidationErrorsComponent implements OnChanges {

  /** INPUT FROM PARENT COMPONENT */
  @Input() validationErrors: object | null = null;

  /** CURRENT STATE OBJECTS */
  errorMessage: string | null = null;

  /**
   * 
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.validationErrors){
      this.errorMessage = this.getErrorMessage();
    }
  }

  /**
   * Returns the error messages
   */
  getErrorMessage(): string | null {
    const errors = this.validationErrors;
    if (errors) {
      if (errors['required']) {
        return 'Field cannot be empty!';
      } else if (errors['jsonTester']) {
        return 'Please enter a JSON!';
      } else if (errors['urlTester']) {
        return 'Please enter a valid URL!';
      }
      return 'Please enter a valid value!';
    }
    return null;
  }
}
