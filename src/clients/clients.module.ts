import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client } from "./entities/client.entity"
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports : [TypeOrmModule.forFeature([Client]),
  PassportModule,
  JwtModule.register({
    secret: 'SECRET_KEY_CLIENT1233',
    signOptions: { expiresIn: '1h' },
  }),
],
  controllers: [ClientsController],
  providers: [ClientsService,LocalStrategy, JwtStrategy]
})
export class ClientsModule {}
