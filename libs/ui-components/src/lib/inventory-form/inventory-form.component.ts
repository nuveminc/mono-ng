import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { PartVM } from '@mono/interfaces';
import { InventoryFormPresenter } from '@mono/presenters';
import { BehaviorSubject } from 'rxjs';

// SAMPLE DATA for form testing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = {
  _id: '',
  partNo: '504600',
  description: 'BROUTER-T',
  serialNo: '0013405',
  endItemCode: 'QFS-T',
  qty: 10,
  lotNumber: '001',
  condition: 'SV-T',
  source: 'NEW',
  manufacturer: 'NORTHROP GRUMMAN CORPORATION 01',
  compatability: 'B777-M',
};

@Component({
  selector: 'mono-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css'],
})
export class InventoryFormComponent implements OnInit {
  @Input()
  item!: BehaviorSubject<PartVM>;

  @Output() itemSubmitted: EventEmitter<PartVM>;

  public name = new FormControl('');
  public entityForm: FormGroup;

  public fields: string[];

  constructor(
    private fb: FormBuilder,
    private presenter: InventoryFormPresenter
  ) {
    this.itemSubmitted = new EventEmitter<PartVM>();
    this.fields = presenter.formFields;
    this.entityForm = this.createGroup();
  }

  public ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.item.subscribe((selectedItem: any) => {
      try {
        this.fields.forEach((f) => {
          const itemValue = selectedItem[f] || '';
          const value = { [f]: itemValue };
          this.entityForm.patchValue(value);
        });
      } catch (err) {
        console.log('Error:', err);
      }
    });
  }

  public onSubmit(): void {
    const item = {
      ...this.item.value,
      ...this.entityForm.value,
    };
    // This can be implemented in either
    // the parent or a more specific Presenter
    this.itemSubmitted.emit(item);
    // this.presenter.create(item);
    // this.presenter.update(item);
  }

  public createGroup(item?: PartVM): FormGroup {
    const group: { [key: string]: AbstractControl } = {};
    const formItem = item || data;
    this.fields.forEach((f) => {
      group[f] = new FormControl(formItem[f]);
    });
    return new FormGroup(group, { updateOn: 'blur' });
  }
}
