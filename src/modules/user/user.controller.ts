import {
    Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiErrorDto } from 'src/dto/error.dto';
import { CreateUserDto, GetUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiTags('User Apis')
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 400, type: ApiErrorDto })
  async getUsers(@Query() query?: GetUserDto) {
    try {
      return this.userService.getUser(query);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @ApiTags('User Apis')
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 400, type: ApiErrorDto })
  async CreateUser(@Body() body: CreateUserDto) {
    try {
      return this.userService.createUser(body);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put('/:id')
  @ApiTags('User Apis')
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 400, type: ApiErrorDto })
  async UpdateUser(@Body() body: UpdateUserDto, @Param("id") id: string) {
    try {
      return this.userService.updateUser(id, body);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('/:id')
  @ApiTags('User Apis')
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 400, type: ApiErrorDto })
  async DeleteUser(@Param("id") id: string) {
    try {
      return this.userService.deleteUser(id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
