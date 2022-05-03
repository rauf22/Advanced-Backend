import { ValidationPipe } from './pipes/validation.pipe';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Урок по продвинутому BACKEND')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Rauf')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()