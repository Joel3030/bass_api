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
import { ClientService } from './client.service';
import { CreateClientDto } from './dtos';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getClients(@Res() res: Response): Promise<Response> {
    const clients = await this.clientService.getClients();
    return res.status(HttpStatus.OK).json(clients);
  }

  @Get(':id')
  async getClient(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const client = await this.clientService.getClient(id);
    return res.status(HttpStatus.OK).json(client);
  }

  @Post('create')
  async createClient(
    @Res() res: Response,
    @Body() req: CreateClientDto,
  ): Promise<Response> {
    const newClient = await this.clientService.createClient(req);
    return res.status(HttpStatus.CREATED).json({
      message: 'Client Created Successfully',
      newClient,
    });
  }

  @Put('update/:id')
  async updateClient(
    @Res() res: Response,
    @Body() req: CreateClientDto,
    @Param('id') id: string,
  ): Promise<Response> {
    const updatedClient = await this.clientService.updateClient(id, req);
    return res.status(HttpStatus.OK).json({
      message: 'Client Updated Successfully',
      updatedClient,
    });
  }

  @Delete('delete/:id')
  async deleteClient(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const deletedClient = await this.clientService.deleteClient(id);
    return res.status(HttpStatus.OK).json({
      message: 'Client Deleted Successfully',
      deletedClient,
    });
  }
}
