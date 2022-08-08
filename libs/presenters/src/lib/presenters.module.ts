import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPresenter } from './inventory.presenter';
import { RepositoriesModule } from '@mono/repositories';
import { InventoryFormPresenter } from './inventory-form.presenter';

@NgModule({
  imports: [CommonModule, RepositoriesModule],
  providers: [InventoryPresenter, InventoryFormPresenter],
})
export class PresentersModule {}
