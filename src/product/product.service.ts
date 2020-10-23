import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory, InventoryDocument } from './schemas';
import { plainToClass } from 'class-transformer';
import {
  CreateInventoryDto,
  ReadInventoryDto,
  UpdateInventoryDto,
} from './dtos';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Inventory.name)
    private inventoryModel: Model<InventoryDocument>,
  ) {}

  async getInventories(): Promise<ReadInventoryDto[]> {
    const inventories: Inventory[] = await this.inventoryModel.find();
    return plainToClass(ReadInventoryDto, inventories);
  }

  async getInventory(id: string): Promise<ReadInventoryDto> {
    const inventory = await this.inventoryModel.findById(id);
    return plainToClass(ReadInventoryDto, inventory);
  }

  async createInventory(req: CreateInventoryDto): Promise<ReadInventoryDto> {
    const newInventory = new this.inventoryModel(req);
    const inventory = await newInventory.save();
    return plainToClass(ReadInventoryDto, inventory);
  }

  async updateInvnetory(id: string, req: UpdateInventoryDto) {
    const updatedInventory = await this.inventoryModel.findByIdAndUpdate(
      id,
      { $set: req },
      { new: true },
    );
    return plainToClass(ReadInventoryDto, updatedInventory);
  }

  async deleteinventory(id: string) {
    const deletedInvnetory = await this.inventoryModel.findByIdAndDelete(id);
    return plainToClass(ReadInventoryDto, deletedInvnetory);
  }
}
