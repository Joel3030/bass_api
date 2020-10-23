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
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('inventory')
  async getInventories(@Res() res: Response): Promise<Response> {
    const inventories = await this.productService.getInventories();
    return res.status(HttpStatus.OK).json(inventories);
  }

  @Get('inventory/:id')
  async getInvnetory(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const inventory = await this.productService.getInventory(id);
    return res.status(HttpStatus.OK).json(inventory);
  }

  @Post('inventory/create')
  async createInventory(
    @Res() res: Response,
    @Body() req: CreateInventoryDto,
  ): Promise<Response> {
    const newInventory = await this.productService.createInventory(req);
    return res.status(HttpStatus.CREATED).json({
      messesa: 'Invnetory Created Successfully',
      newInventory,
    });
  }

  @Put('inventory/update/:id')
  async updateInventory(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() req: UpdateInventoryDto,
  ): Promise<Response> {
    const updatedInventory = await this.productService.updateInvnetory(id, req);
    return res.status(HttpStatus.OK).json({
      message: 'Inventory Updated Successfully',
      updatedInventory,
    });
  }

  @Delete('inventory/delete/:id')
  async deleteInventory(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const deletedInventory = await this.productService.deleteinventory(id);
    return res.status(HttpStatus.OK).json({
      message: 'Inventory Delete Successfully',
      deletedInventory,
    });
  }
}
