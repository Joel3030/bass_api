import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schemas/employee.schema';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { updateEmployeeDto } from './dtos/update-employee.dto';
import { ReadEmployeeDto } from './dtos/read-employee.dto';
import { plainToClass } from 'class-transformer';

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

  async createEmployee(req: CreateEmployeeDto): Promise<ReadEmployeeDto> {
    const newEmployee = new this.employeeModel(req);
    return plainToClass(ReadEmployeeDto, newEmployee);
  }

  async updateEmployee(
    id: string,
    req: updateEmployeeDto,
  ): Promise<ReadEmployeeDto> {
    const updatedEmployee = await this.employeeModel.findByIdAndUpdate(
      id,
      { set: req },
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
