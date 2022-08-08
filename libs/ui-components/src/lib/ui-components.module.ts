import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { PresentersModule } from '@mono/presenters';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PresentersModule, ReactiveFormsModule],
  declarations: [InventoryComponent, InventoryFormComponent],
  exports: [InventoryComponent, InventoryFormComponent],
})
export class UiComponentsModule {}
