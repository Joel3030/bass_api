import { Injectable, NotFoundException } from '@nestjs/common';
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
export class ProductService {}
