import { Injectable, NotFoundException } from '@nestjs/common';
import { Inventory, InventoryDocument } from './schemas/inventory.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateInventoryDto,
  ReadInventoryDto,
  UpdateInventoryDto,
} from './dtos';
import { plainToClass } from 'class-transformer';

@Injectable()
export class InventoryService {
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
    if (!inventory) throw new NotFoundException('Inventory does not exist');
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
    if (!updatedInventory)
      throw new NotFoundException('Inventory does not exist');
    return plainToClass(ReadInventoryDto, updatedInventory);
  }

  async deleteinventory(id: string) {
    const deletedInvnetory = await this.inventoryModel.findByIdAndDelete(id);
    if (!deletedInvnetory)
      throw new NotFoundException('Inventory does not exist');
    return plainToClass(ReadInventoryDto, deletedInvnetory);
  }
}
