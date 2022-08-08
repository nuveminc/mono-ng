import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRepository } from './inventory.repository';
import { HttpGatewayModule } from '@mono/http-gateway';

@NgModule({
  imports: [CommonModule, HttpGatewayModule],
  providers: [InventoryRepository],
})
export class RepositoriesModule {}
