import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsOptional} from 'class-validator';

export class GetUserDto {
    @ApiProperty()
    @IsOptional()
    firstName: string;

    @ApiProperty()
    @IsOptional()
    lastName: string;

    @ApiProperty()
    @IsOptional()
    userId: string;

    @ApiProperty()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsOptional()
    phoneNumber: string;

    @ApiProperty()
    @IsOptional()
    country: string;

    @ApiProperty()
    @IsOptional()
    _id: string;

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