import { Injectable } from '@angular/core';
import { PartPM } from '@mono/interfaces';
import { InventoryRepository } from '@mono/repositories';
import { BehaviorSubject } from 'rxjs';
import { PartVM } from '@mono/interfaces';

// used to test adding a new part (item)
export const newItem: PartVM = {
  _id: '',
  facilityId: '',
  partNo: '',
  serialNo: '',
  description: '',
  compatability: '',
  manufacturer: '',
  endItemCode: '',
  qty: 0,
  lotNumber: '',
  condition: '',
  source: '',
};

@Injectable()
/**
 * Presenters encapsulate all functions required by the UI framework.
 * The presenter should hold any features that are not specific to the UI framework.
 * Features such as sorting, filtering, or show/hide should be maintained in the Presenter service
 *
 * This should pass any data back to the Repository if state is required to be held beyond
 * the specific UI view. For instance, if data or a display state is required in another view,
 * then that state should exist in the Repository.
 */
export class InventoryPresenter {
  // Observables available to the UI Framework
  public items$!: BehaviorSubject<PartVM[]>;
  public selectedItem$: BehaviorSubject<PartVM>;
  public showForm$: BehaviorSubject<boolean>;

  private toggleShow: boolean;

  constructor(private repository: InventoryRepository) {
    // this.items$ = this.repository.items$.pipe(
    //   map((items) => {
    //     // we need to map the Programmers View (Repository PM) to
    //     // the current view that we expect on the UI View Model (Presenter VM)
    //     const vmItems = items.map((i: PartPM) => this.createVM(i));
    //     return vmItems;
    //   })
    // );
    this.items$ = new BehaviorSubject<PartVM[]>([]);
    this.repository.items$.subscribe((items) => {
      // we need to map the Programmers View (Repository PM) to
      // the current view that we expect on the UI View Model (Presenter VM)
      const vmItems = items.map((i: PartPM) => this.createVM(i));
      this.items$.next(vmItems);
    });
    this.showForm$ = new BehaviorSubject<boolean>(false);
    this.selectedItem$ = new BehaviorSubject<PartVM>(newItem);
    this.toggleShow = false;
  }

  public getAll(): void {
    this.repository.getAll();
  }

  public create(item: PartVM): void {
    const itemPM = this.createPM(item);
    this.repository.post(itemPM);
  }

  public update(item: PartVM): void {
    const itemPM = this.createPM(item);
    this.repository.put(itemPM);
  }

  public toggleDialog(): void {
    // toggle dialog
    this.toggleShow = !this.toggleShow;
    this.showForm$.next(this.toggleShow);
  }

  public setSelectedItem(item: PartVM): void {
    this.selectedItem$.next(item);
  }

  /**
   * A transformer function to map PM objects to VM objects
   * This also creates a SoC - Separation of Concerns and keeps the models separate
   * allowing the easy swapping in/out of various models and their mappings
   *
   * @param item The item originating from the Repository (Programmers Model: PM)
   * @returns A mapped item for the UI (View Model: VM)
   */
  private createVM(item: PartPM): PartVM {
    const NA = 'N/A';
    return {
      _id: item._id,
      facilityId: item.facilityId || '',
      partNo: item.partNumber, // an example mapping PM => VM
      serialNo: item.serialNumber,
      description: item.description || NA, // set any other values here
      compatability: item.compatibility,
      manufacturer: item.manufacturer,
      endItemCode: item.endItemCode,
      qty: item.quantity || 0, // an example mapping PM => VM
      lotNumber: item.lotNumber,
      condition: item.condition || NA,
      // traceHistory: TraceHistory[];
      source: item.source || NA,
    };
  }

  /**
   * A transformer function to map VM objects to PM objects to be consumed
   * by the Repository. The data should be mapped back to the Repository
   * Model.
   *
   * @param item The item originating from the UI View (View Model: VM)
   * @returns A mapped item for the UI (Programmers Model: PM)
   */
  private createPM(item: PartVM): PartPM {
    return {
      _id: item._id,
      facilityId: item.facilityId,
      partNumber: item.partNo,
      serialNumber: item.serialNo,
      description: item.description,
      compatibility: item.compatability,
      manufacturer: item.manufacturer,
      endItemCode: item.endItemCode,
      quantity: item.qty,
      lotNumber: item.lotNumber,
      condition: item.condition,
      source: item.source,
      traceHistory: [],
    };
  }
}
