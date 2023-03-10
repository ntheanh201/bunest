import { Controller, Get, Module, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  public index () {
    return {
      message: 'Hello World!',
      date: new Date(),
    };
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function main () {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Logger.log('Server started on http://localhost:3000', 'NestApplication');
}

main();
