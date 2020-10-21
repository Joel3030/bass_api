import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { updateEmployeeDto } from './dtos/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  async getEmployees(@Res() res: Response): Promise<Response> {
    const employees = await this.employeeService.getEmployees();
    return res.status(HttpStatus.OK).json(employees);
  }

  @Get(':id')
  async getEmployee(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const employee = await this.employeeService.getEmployee(id);
    return res.status(HttpStatus.OK).json(employee);
  }

  @Post('create')
  async createEmployee(
    @Res() res: Response,
    @Body() req: CreateEmployeeDto,
  ): Promise<Response> {
    
    const newEmployee = await this.employeeService.createEmployee(req);
    return res.status(HttpStatus.OK).json({
      message: 'Employee Created Successfully',
      newEmployee,
    });
  }

  @Put('update/:id')
  async updateEmployee(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() req: updateEmployeeDto,
  ): Promise<Response> {
    const updatedEmployee = await this.employeeService.updateEmployee(id, req);
    return res.status(HttpStatus.OK).json({
      message: 'Employee Updated Successfully',
      updatedEmployee,
    });
  }

  @Delete('delete/:id')
  async deleteEmployee(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const deletedEmployee = await this.employeeService.deleteEmployee(id);
    return res.status(HttpStatus.OK).json({
      message: 'Employee Deleted Successfully',
      deletedEmployee,
    });
  }
}
