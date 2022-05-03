import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
export class CreateUserDto {

  @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: 'Не корректный email'})
  readonly email: string;

  @ApiProperty({example: '123456678', description: 'Пароль'})
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 16, {message: 'Не меньше 4 и не более 16'})
  readonly password: string;
}