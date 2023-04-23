import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Admin } from "./entities/admin.entity"
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports : [
    TypeOrmModule.forFeature([Admin]),    
    PassportModule,
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1h' },
    })  ,
  ],
  controllers: [AdminController],
  providers: [AdminService,LocalStrategy, JwtStrategy]
})
export class AdminModule {}
