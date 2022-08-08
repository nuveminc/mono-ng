import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpGatewayService,
  GraphQLProvider,
  HttpProvider,
} from '@mono/http-gateway';
import { PartDTO, PartVM } from '@mono/interfaces';
import { inventory, MockDataProvider } from '@mono/mocks';
import { InventoryPresenter } from '@mono/presenters';
import { InventoryRepository } from '@mono/repositories';

import { InventoryComponent } from './inventory.component';

// test part VM (uses Mock DTO -0-)
const partVM_0: PartVM = {
  _id: 'e82afc8b-faaa-44eb-a2cf-286bd86fe2e0',
  facilityId: '50a971d6-908c-4127-a103-7ef1fef385a2',
  compatability: 'B777',
  condition: 'SV',
  description: 'BROUTER',
  endItemCode: 'QFS',
  lotNumber: '5',
  manufacturer: 'NORTHROP GRUMMAN CORPORATION',
  partNo: '104600',
  qty: 1,
  serialNo: '13405',
  source: 'NEW',
};

// test part VM (uses Mock DTO -05-)
const partVM_05: PartVM = {
  _id: '64d5008e-c693-4ad1-9216-5066fd91c8ee',
  facilityId: '50a971d6-908c-4127-a103-7ef1fef385a2',
  compatability: 'B757',
  condition: 'OH',
  description: 'HPU AY',
  endItemCode: 'LWN',
  lotNumber: '13',
  manufacturer: 'TRIUMPH ACTUATION SYSTEMS',
  partNo: '1FA13043-14',
  qty: 1,
  serialNo: '13425',
  source: 'PMA',
};

// get the first item in inventory
const partDTO_0: PartDTO = inventory[0];

// length of the mock data array
const mockCount = inventory.length;

// initialize the test bed variables
let component: InventoryComponent;
let fixture: ComponentFixture<InventoryComponent>;
let presenter: InventoryPresenter;
// let fixture: ComponentFixture<InventoryComponent>;
let service: MockDataProvider;

/**
 * Mock service. This is the mocked provider.
 * In this case we're mocking the HttpMockProvider as
 * that is the current provider being used by the application.
 * This could be gotten from the service
 */
const initializeMocks = () => {
  service = fixture.debugElement.injector.get(MockDataProvider);
  service.getAll = jest.fn().mockImplementation(() => {
    return of([...inventory]);
  });
  service.post = jest.fn().mockImplementation(() => {
    return of({ ...inventory[mockCount + 1] });
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service.put = jest.fn().mockImplementation((...args: any) => {
    // argument list: path, item, id
    return of(args[1]);
  });
};

/**
 * The test setup will create the Component (InventoryComponent)
 * and the Presenter (InvnentoryPresenter). In this example, the
 * presenter is being tested and mocking the provider. Both
 * the Compnent and the Provider can be tested, but typically
 * we would only need to test the presenter as they have mostly
 * a 1:1 relationship.
 */
const testSetup = () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      // because we have a dependency tree, NG TestBed
      // requires us to inject all child dependencies
      // a bit of a pain, but not sure of a workaround
      // except to test without the NG test framework.
      providers: [
        InventoryPresenter,
        InventoryRepository,
        HttpGatewayService,
        HttpProvider,
        GraphQLProvider,
        MockDataProvider,
        HttpClient,
        HttpHandler,
        Apollo,
      ],
    }).compileComponents();
    // injecting the Presenter so we can test this also
    presenter = TestBed.inject(InventoryPresenter);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    initializeMocks();
    fixture.detectChanges();
  });
};

describe('InventoryComponent', () => {
  /**
   * Testing the Presenter without the Component
   */
  describe('Presenter', () => {
    // initalize beforeEach setup
    testSetup();

    it('should create an Inventory Component', () => {
      expect(presenter).toBeTruthy();
    });

    it('should load an Item array of n-elements', () => {
      expect(presenter.items$.value.length).toEqual(mockCount);
    });

    it('should have a first Item[0]', () => {
      expect(presenter.items$.value[0]).toStrictEqual(partVM_0);
    });

    it('should have a last Item[5]', () => {
      expect(presenter.items$.value[mockCount - 1]).toStrictEqual(partVM_05);
    });

    it('should allow an item from the list to be selected', () => {
      component.selectItem(partVM_0);
      expect(presenter.selectedItem$.value).toStrictEqual(partVM_0);

      presenter.setSelectedItem(partVM_0);
      expect(presenter.selectedItem$.value).toStrictEqual(partVM_0);
    });
  });

  /**
   * Example of testing the Component only
   */
  describe('Component Tests', () => {
    it('should toggle the form view: on/off', () => {
      component.toggleDialog();
      expect(component.showForm$.value).toEqual(true);

      component.toggleDialog();
      expect(component.showForm$.value).toEqual(false);
    });

    it('should allow an item to be selected', () => {
      component.isSelected(partVM_0);
      expect(component.items$.value.length).toEqual(mockCount);
    });

    it('should not allow an item to be created if _id is not empty', () => {
      // setting the id as an empty string to create a new object
      const newItem = { ...partVM_0 };
      component.itemSubmitted(newItem);
      // incrementing the mock as we now have added the item to the list
      expect(presenter.items$.value.length).toEqual(mockCount);
    });
  });

  /**
   * Now we'll test the Gateway to see if it's being called correctly
   * for all our invocations from the Presenter => Repository => Gateway
   * This is the 'black-box' testing. We don't care, necesarily, what is
   * going on internally, just that our expected input/output is correct.
   */
  describe('Gateway', () => {
    // initalize beforeEach setup
    testSetup();

    it('should allow an item to be created if _id is empty', () => {
      // setting the id as an empty string to create a new object
      const newItem = { ...partVM_0 };
      newItem._id = '';
      presenter.create(newItem);
      // be careful with subsequent tests if you don't mock the
      // gateway object as the the Presenter is a singleton injected dependency.
      // If this is the case, then resetTestEnvironment should be called.

      // incrementing the mock as we now have added the item to the list
      expect(presenter.items$.value.length).toEqual(mockCount + 1);
    });

    it('should allow an item to be updated if _id exists', () => {
      // setting the id as an empty string to create a new object
      const _id = 'e82afc8b-faaa-44eb-a2cf-286bd86fe2e0';
      presenter.update(partVM_0);
      expect(presenter.items$.value.length).toEqual(mockCount);
      expect(presenter.items$.value[0]._id).toStrictEqual(_id);
    });

    it('should call the gateway.put passing itemDTO as (path, item, id)', () => {
      presenter.update(partVM_0);
      expect(service.put).toHaveBeenCalledWith(
        'inventory',
        partDTO_0,
        partDTO_0._id
      );
    });
  });
});
