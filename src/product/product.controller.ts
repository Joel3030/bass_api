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
import { CreateProductDto, ReadProductDto, UpdateProductDto } from './dtos';

@Controller('product')
export class ProductController {
  constructor(private readonly productServices: ProductService) {}

  @Get()
  async getProducts(@Res() res: Response): Promise<Response> {
    const products: ReadProductDto[] = await this.productServices.getProdcuts();
    return res.status(HttpStatus.OK).json(products);
  }

  @Get(':id')
  async getProduct(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const product: ReadProductDto = await this.productServices.getProduct(id);
    return res.status(HttpStatus.OK).json(product);
  }

  @Post('create')
  async createProduct(
    @Res() res: Response,
    @Body() req: CreateProductDto,
  ): Promise<Response> {
    const newProduct: ReadProductDto = await this.productServices.createProduct(
      req,
    );
    return res.status(HttpStatus.CREATED).json({
      message: 'Prodcut Created Successfully',
      newProduct,
    });
  }

  @Put('update/:id')
  async updateProduct(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() req: UpdateProductDto,
  ): Promise<Response> {
    const updatedProduct: ReadProductDto = await this.productServices.updateProduct(
      id,
      req,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully',
      updatedProduct,
    });
  }

  @Delete('delete/:id')
  async deleteproduct(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const deletedProduct: ReadProductDto = await this.productServices.deleteProduct(
      id,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully',
      deletedProduct,
    });
  }
}
