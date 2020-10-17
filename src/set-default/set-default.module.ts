import { Module } from '@nestjs/common';
import { SetDefaultService } from './set-default.service';

import { MongooseModule } from '@nestjs/mongoose';
import { User, DefaultUserSchema } from './schemas/set-default-user.schema';

@Module({imports: [MongooseModule.forFeature([{ name: User.name, schema: DefaultUserSchema}])],
  providers: [SetDefaultService],
  exports: [SetDefaultService]
})
export class SetDefaultModule {}
