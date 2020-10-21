import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schemas/employee.schema';
import { CreateEmployeeDto, updateEmployeeDto, ReadEmployeeDto } from './dtos';

import { plainToClass, plainToClassFromExist } from 'class-transformer';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async getEmployees(): Promise<ReadEmployeeDto[]> {
    const employees = await this.employeeModel.find();
    return plainToClass(ReadEmployeeDto, employees);
  }

  async getEmployee(id: string): Promise<ReadEmployeeDto> {
    const employee = await this.employeeModel.findById(id);
    if (!employee) throw new NotFoundException('Employee does not exist');
    return plainToClass(ReadEmployeeDto, employee);
  }

  async createEmployee(req: Partial< CreateEmployeeDto>): Promise<ReadEmployeeDto> {
    const newEmployee = new this.employeeModel(req);
    const employee: Employee = await newEmployee.save();
    return plainToClass(ReadEmployeeDto, employee);
  }

  async updateEmployee(
    id: string,
    req: updateEmployeeDto,
  ): Promise<ReadEmployeeDto> {
    req.update_at = new Date();

    const updatedEmployee = await this.employeeModel.findByIdAndUpdate(
      id,
      req,
      { new: true },
    );
    if (!updatedEmployee)
      throw new NotFoundException('Employee does not exist');
    return plainToClass(ReadEmployeeDto, updatedEmployee);
  }

  async deleteEmployee(id: string): Promise<ReadEmployeeDto> {
    const deletedEmployee = await this.employeeModel.findByIdAndDelete(id);
    if (!deletedEmployee)
      throw new NotFoundException('Employee does not exist');
    return plainToClass(ReadEmployeeDto, deletedEmployee);
  }
}
