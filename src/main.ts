import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//third party
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; //import swagger
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //connect mongodb
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  //setting swagger config
  const config = new DocumentBuilder()
  .setTitle('Blog API')
  .setDescription('This is a sample blog API')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(5000);
}
bootstrap();
