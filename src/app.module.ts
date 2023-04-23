import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from './database/db.module';
import { AdminModule } from './admin/admin.module';
import { ClientsModule } from './clients/clients.module';
import { MealsModule } from './meals/meals.module';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    AdminModule,
    ClientsModule,
    MealsModule,
    CategoriesModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
