import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { Response } from 'express';
import { CreateInventoryDto, UpdateInventoryDto } from './dtos';

@Controller('product')
export class ProductController {}
