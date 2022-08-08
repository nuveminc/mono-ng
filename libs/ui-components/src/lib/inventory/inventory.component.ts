import { Component, OnInit } from '@angular/core';
import { PartVM } from '@mono/interfaces';
import { InventoryPresenter } from '@mono/presenters';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mono-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  public items$: BehaviorSubject<PartVM[]>;
  public selectedItem$: BehaviorSubject<PartVM>;
  public showForm$: BehaviorSubject<boolean>;

  /**
   * This component has an injected presenter. The presenter
   * supports all display and logic functions performed by the component.
   *
   * The component only utilizes framework specific components and features.
   * Any logic or data shaping is to be performed within the presenter and all
   * operations should utilize an Observer pattern.
   *
   * @param presenter Injected presenter 'service'
   */
  constructor(public presenter: InventoryPresenter) {
    this.items$ = this.presenter.items$;
    this.selectedItem$ = this.presenter.selectedItem$;
    this.showForm$ = this.presenter.showForm$;
  }

  public ngOnInit(): void {
    this.presenter.getAll();
  }

  public toggleDialog(): void {
    // toggle dialog
    this.presenter.toggleDialog();
  }

  /**
   * This is a split handler - can break this out
   * so update or create are called independently.
   *
   * Also notice the duplicate implementation in
   * InventoryFormPresenter. This can be implemented
   * in either Presenter depending on the use-case.
   *
   * This is a simplified example to combine both actions.
   *
   * @param item The created/updated item
   */
  public itemSubmitted(item: PartVM): void {
    // calls create part to persist part
    if (item._id && item._id.length > 0) {
      this.presenter.update(item);
    } else {
      this.presenter.create(item);
    }
  }

  public selectItem(item: PartVM): void {
    this.presenter.setSelectedItem(item);
  }

  public isSelected(item: PartVM): boolean {
    return this.selectedItem$.value._id === item._id;
  }
}
