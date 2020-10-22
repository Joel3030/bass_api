import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ReadCompanyDto,
  ReadSellerDto,
  CreateSellerDto,
  UpdateCompanyDto,
  UpdateSellerDto,
} from './dtos';
import { Company, CompanyDocument, Seller, SellerDocument } from './schemas';
import { plainToClass } from 'class-transformer';
import { CreateCompanyDto } from './dtos/create-company.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
    @InjectModel(Seller.name) private sellerModel: Model<SellerDocument>,
  ) {}

  async getCompanies(): Promise<ReadCompanyDto[]> {
    const companies: Company[] = await this.companyModel.find();
    return plainToClass(ReadCompanyDto, companies);
  }

  async getCompany(id: string): Promise<ReadCompanyDto> {
    const company: Company = await this.companyModel.findById(id);
    if (!company) throw new NotFoundException('Seller does not exist');
    return plainToClass(ReadCompanyDto, company);
  }

  async createCompany(req: CreateCompanyDto): Promise<ReadCompanyDto> {
    const newCompany = new this.companyModel(req);
    const company: Company = await newCompany.save();
    return plainToClass(ReadCompanyDto, company);
  }

  async updateCompany(
    id: string,
    req: UpdateCompanyDto,
  ): Promise<ReadCompanyDto> {
    const updatedCompany: Company = await this.companyModel.findByIdAndUpdate(
      id,
      { $set: req },
      { new: true },
    );
    if (!updatedCompany) throw new NotFoundException('Company does not exist');
    return plainToClass(ReadCompanyDto, updatedCompany);
  }

  async deleteCompany(id: string): Promise<ReadCompanyDto> {
    const deletedCompany: Company = await this.companyModel.findByIdAndDelete(
      id,
    );
    if (!deletedCompany) throw new NotFoundException('Seller does not exist');
    return plainToClass(ReadCompanyDto, deletedCompany);
  }

  async getVentors(): Promise<ReadSellerDto[]> {
    const ventors: Seller[] = await this.sellerModel.find().populate('company');
    return plainToClass(ReadSellerDto, ventors);
  }

  async getSeller(id: string): Promise<ReadSellerDto> {
    const seller: Seller = await this.sellerModel.findById(id);
    if (!seller) throw new NotFoundException('Seller does not exist');
    return plainToClass(ReadSellerDto, seller);
  }

  async createSeller(req: CreateSellerDto): Promise<ReadSellerDto> {
    const newSeller = new this.sellerModel(req);
    const seller: Seller = await newSeller.save();
    return plainToClass(ReadSellerDto, seller);
  }

  async updateSeller(id: string, req: UpdateSellerDto): Promise<ReadSellerDto> {
    const updatedSeller: Seller = await this.sellerModel.findByIdAndUpdate(
      id,
      { $set: req },
      { new: true },
    );
    if (!updatedSeller) throw new NotFoundException('Seller does not exist');
    return plainToClass(ReadSellerDto, updatedSeller);
  }

  async deleteSeller(id: string): Promise<ReadSellerDto> {
    const deletedSeller: Seller = await this.sellerModel.findByIdAndDelete(id);
    if (!deletedSeller) throw new NotFoundException('Seller does not exist');
    return plainToClass(ReadSellerDto, deletedSeller);
  }
}
