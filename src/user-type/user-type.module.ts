import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './user-type-entity';
import { UserTypeController } from './user-type.controller';
import { UserTypeService } from './user-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
 
  controllers: [UserTypeController],
  providers: [UserTypeService]
  
})
export class UserTypeModule {}
