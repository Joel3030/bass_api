import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { SupplierService } from './supplier.service';
import {
  CreateCompanyDto,
  CreateSellerDto,
  UpdateCompanyDto,
  UpdateSellerDto,
} from './dtos';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get('company')
  async getCompanies(@Res() res: Response): Promise<Response> {
    const companies = await this.supplierService.getCompanies();
    return res.status(HttpStatus.OK).json(companies);
  }

  @Get('company/:id')
  async getCompany(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const company = await this.supplierService.getCompany(id);
    return res.status(HttpStatus.OK).json(company);
  }

  @Post('company/create')
  async createCompany(
    @Res() res: Response,
    @Body() req: CreateCompanyDto,
  ): Promise<Response> {
    const newCompany = await this.supplierService.createCompany(req);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Company Created Successfully', newCompany });
  }

  @Put('company/update/:id')
  async updateCompany(
    @Res() res: Response,
    @Param('id') id: string,
    @Req() req: UpdateCompanyDto,
  ): Promise<Response> {
    const updatedCompany = await this.supplierService.updateCompany(id, req);
    return res.status(HttpStatus.OK).json({
      message: 'Company Updated Successfully',
      updatedCompany,
    });
  }

  @Delete('company/delete/:id')
  async deleteCompany(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const deletedCompany = await this.supplierService.deleteCompany(id);
    return res.status(HttpStatus.OK).json({
      message: 'Company Deleted Successfully',
      deletedCompany,
    });
  }

  @Get('seller')
  async getVentors(@Res() res: Response): Promise<Response> {
    const ventors = await this.supplierService.getVentors();
    return res.status(HttpStatus.OK).json(ventors);
  }

  @Get('seller/:id')
  async getSeller(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const seller = await this.supplierService.getSeller(id);
    return res.status(HttpStatus.OK).json(seller);
  }

  @Post('seller/create')
  async createSeller(
    @Res() res: Response,
    @Body() req: CreateSellerDto,
  ): Promise<Response> {
    const newSeller = await this.supplierService.createSeller(req);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Seller Created Successfully', newSeller });
  }

  @Put('seller/update/:id')
  async updateSeller(
    @Res() res: Response,
    @Param('id') id: string,
    @Req() req: UpdateSellerDto,
  ): Promise<Response> {
    const updatedSeller = await this.supplierService.updateSeller(id, req);
    return res.status(HttpStatus.OK).json({
      message: 'Seller Updated Successfully',
      updatedSeller,
    });
  }

  @Delete('seller/delete/:id')
  async deleteSeller(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const deletedSeller = await this.supplierService.deleteSeller(id);
    return res.status(HttpStatus.OK).json({
      message: 'Seller Deleted Successfully',
      deletedSeller,
    });
  }
}
