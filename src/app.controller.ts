import { Controller, Get, Header, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Header('Cache-Control', 'no-cache')
  @HttpCode(HttpStatus.OK)
  index() {
    return 'OK';
  }
}
