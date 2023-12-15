import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

const validToken = 'Basic imMike';
@Injectable()
export class MikeGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers["authorization"]

    if (!this.isMike(authHeader)) {
      throw new ForbiddenException('Sorry, but you are not Mike!');
    }
    return true;
  }
  private isMike(authHeader: string | undefined): boolean {
    return authHeader === validToken;
  }
}