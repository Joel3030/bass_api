import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { CreateProductDto, ReadProductDto, UpdateProductDto } from './dtos';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProdcuts(): Promise<ReadProductDto[]> {
    const products: Product[] = await this.productModel.find();
    return plainToClass(ReadProductDto, products);
  }

  async getProduct(id: string): Promise<ReadProductDto> {
    const product: Product = await this.productModel.findById(id);
    if (!product) throw new NotFoundException('Product does not exist');
    return plainToClass(ReadProductDto, product);
  }

  async createProduct(req: CreateProductDto): Promise<ReadProductDto> {
    const newProduct = new this.productModel(req);
    const product: Product = await newProduct.save();
    return plainToClass(ReadProductDto, product);
  }

  async updateProduct(
    id: string,
    req: UpdateProductDto,
  ): Promise<ReadProductDto> {
    const updatedProduct: Product = await this.productModel.findByIdAndUpdate(
      id,
      req,
      {
        new: true,
      },
    );
    if (!updatedProduct) throw new NotFoundException('Product does not exist');
    return plainToClass(ReadProductDto, updatedProduct);
  }

  async deleteProduct(id: string): Promise<ReadProductDto> {
    const deletedProduct: Product = await this.productModel.findByIdAndDelete(
      id,
    );
    if (!deletedProduct) throw new NotFoundException('Product does not exist');
    return plainToClass(ReadProductDto, deletedProduct);
  }
}
