import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Configuration from './config/configuration';
import { keys } from './config/constants';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SetDefaultModule } from './set-default/set-default.module';
import { SetDefaultService } from './set-default/set-default.service';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './app.roles';
import { EmployeeModule } from './employee/employee.module';
import { ClientModule } from './client/client.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [Configuration],
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(keys.MONGODB_URI),
      }),
    }),
    AccessControlModule.forRoles(roles),
    UserModule,
    AuthModule,
    SetDefaultModule,
    EmployeeModule,
    ClientModule,
    SupplierModule,
    ProductModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  static config: ConfigService;

  constructor(
    private readonly configService: ConfigService,
    private readonly setDefaultService: SetDefaultService,
  ) {
    AppModule.port = this.configService.get<string>(keys.PORT);
    this.setDefaultService;
  }
}
