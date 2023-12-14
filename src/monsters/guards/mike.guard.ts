import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

const validToken = 'Basic imMike';
@Injectable()
export class MikeGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers["authorization"]
    const isMike = authHeader === validToken;

    return isMike;
  }
}