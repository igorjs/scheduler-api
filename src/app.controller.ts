import { Controller, Get, Header, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('healthcheck')
  @Header('Cache-Control', 'no-cache')
  @HttpCode(HttpStatus.OK)
  healthcheck() {
    return 'healthy';
  }
}
