import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsOptional} from 'class-validator';

export class GetUserDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    @IsOptional()
    limit:number
}

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    country: string;
}

export class UpdateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    phoneNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    country: string;
}