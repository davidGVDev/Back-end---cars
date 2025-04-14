import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  creatrCar(@Body() body: any) {
    return {
      message: 'Car created',
      body,
    };
  }

  @Patch(':id')
  updatedCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      message: 'Car updated',
      body,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'Car deleted',
      id,
    };
  }
}
