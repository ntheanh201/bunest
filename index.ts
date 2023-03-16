import { Controller, Get, Module, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { CatsModule } from "./cat.module.js";

@Controller()
class AppController {
  @Get()
  public index() {
    return {
      message: "Hello World!",
      date: new Date(),
    };
  }
}

@Module({
  imports: [
    MongooseModule.forRoot(
      ""
    ),
    CatsModule,
  ],
  controllers: [AppController],
})
class AppModule {}

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Logger.log("Server started on http://localhost:3000", "NestApplication");
}

main();
