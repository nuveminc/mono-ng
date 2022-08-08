import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpGatewayService } from '@mono/http-gateway';
import { PartDTO, PartPM } from '@mono/interfaces';

@Injectable()
export class InventoryRepository {
  // creating a BehaviorSubject an observable to emit values
  // this could also be a Store<PartDTO[]>;
  public items$: BehaviorSubject<PartPM[]>;

  // reference to this repositories entity value
  // this can refer to a key in an object definition
  // for the GraphQL queries { inventory: gql`[query]`, company: gql`[query]`, ... }
  private entity = 'inventory';

  constructor(private gateway: HttpGatewayService) {
    this.items$ = new BehaviorSubject<PartPM[]>([]);
  }

  /**
   * An explicit get all items function, could be a get with
   * an optional id for the object, but this makes it more explicit.
   *
   * The data is stored in this service as the Programmers Model (PM)
   */
  public getAll(): void {
    this.gateway.gatewayProvider
      .getAll(this.entity)
      .subscribe((data: PartDTO[]) => {
        const items = data.map(this.createPM);
        this.items$.next([...items]);
      });
  }

  /**
   * Get an item by id
   * Not really necessary, just a convenience function.
   * @param id Item id
   */
  public get(id: string): void {
    // gateway called an response data is published
    const idx = this.items$.value.findIndex((i) => i._id === id);
    if (idx === -1) {
      this.gateway.gatewayProvider
        .get(this.entity, id)
        .subscribe((data: PartDTO) => {
          const item = this.createPM(data);
          const items = this.items$.value.map((i) => (i._id === id ? item : i));
          this.items$.next([...items]);
        });
    }
  }

  public post(item: PartPM): void {
    const itemDTO = this.mergeItem(item);
    this.gateway.gatewayProvider
      .post(this.entity, itemDTO)
      .subscribe((response) => {
        const items = this.items$.value;
        items.push(response);
        this.items$.next([...items]);
      });
  }

  public put(item: PartPM): void {
    const itemPM = this.mergeItem(item);
    this.gateway.gatewayProvider
      .put(this.entity, itemPM, item._id as string)
      .subscribe(() => {
        const items = this.items$.value.map((i: PartDTO) =>
          i._id === item._id ? item : i
        );
        this.items$.next([...items]);
      });
  }

  /**
   * Data Transfer Object (DTO) to Programmers Model (PM)
   * conversion function. This could be handled in a number
   * of different ways.
   *
   * The purpose of this separation is to allow the PM to differ
   * from the DTO and from the VM. The VM is purely a View Model.
   * The DTO is purely a Data Transfer Object in/out of the API.
   *
   * The Programmers Model represents an intermediate model that
   * is the application state and thus could be coupled with a state store.
   * The PM becomes the single-source of truth for the application
   * The PM can mutate the data so it is easy to consume by the VM.
   * The VM (Presenter) only has to maintain the View state.
   *
   * We could call a state store (NgRx) which can hold the state
   * PM objects that originate from the API. The store can be
   * used to handle object mutation or re-creation here or
   * in an additional Business Logic BL module that strictly
   * handles the data and only communiates with this Repository module.
   * to simplify here for demonstration, the object from items$ will be used
   *
   * @param item ItemPM from API (DTO)
   * @returns A new PM for ingestion by VM (Presenter)
   */
  private createPM(item: PartDTO): PartPM {
    return {
      _id: item._id,
      facilityId: item.facilityId,
      partNumber: item.partNumber,
      serialNumber: item.serialNumber,
      description: item.description,
      compatibility: item.compatibility,
      manufacturer: item.manufacturer,
      endItemCode: item.endItemCode,
      quantity: item.quantity,
      lotNumber: item.lotNumber,
      condition: item.condition,
      source: item.source,
      // traceHistory: [...item.traceHistory],
    };
  }

  private createDTO(item: PartPM): PartPM {
    return {
      _id: item._id,
      facilityId: item.facilityId,
      partNumber: item.partNumber,
      serialNumber: item.serialNumber,
      description: item.description,
      compatibility: item.compatibility,
      manufacturer: item.manufacturer,
      endItemCode: item.endItemCode,
      quantity: item.quantity,
      lotNumber: item.lotNumber,
      condition: item.condition,
      source: item.source,
    };
  }

  /**
   * Merging a partial item from the View Model Form into
   * the existing object state to create the full PM object to
   * be passed to the gateway function to send to the API.
   *
   * View Model (VM) to Programmers Model / state (PM) merge
   * function. We can also handle this in various implementations.
   * If we need or choose to use a state store, we would perform a 'select'
   * against the store to get the items. The store would be maintaining the
   * state and we can 'rehydrate' an object from the state if the VM
   * is only handling a partial object. Typically, this may not be the case,
   * but in some circumstances, this may be optimal to lower the cognative
   * load of thinking about the entire object tree.
   *
   * @param item Item PM from Presentation layer
   * @returns A DTO for submission to API
   */
  private mergeItem(item: PartPM): PartPM {
    let itemPM = {} as PartPM;
    if (item._id) {
      itemPM = this.items$.value.filter((i) => i._id === item._id)[0];
    }
    // since we have a flat model - ignoring the TraceHistory, we'll just
    // merge the objects to keep this simple for this demo code.
    // Ideally TraceHistory would also be flattened or handled as an array
    return {
      ...itemPM,
      ...item,
    };
  }
}
