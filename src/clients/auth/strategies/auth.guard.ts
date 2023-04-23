import { Injectable,UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info): any {

    console.log({info,user,err})
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
