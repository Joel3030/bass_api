import { Module, Controller } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema, Seller, SellerSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
      { name: Seller.name, schema: SellerSchema },
    ]),
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
