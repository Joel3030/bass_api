import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto, ReadClientDto, UpdateClientDto } from './dtos';
import { Client, ClientDocument } from './schemas/client.schema';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async getClients(): Promise<ReadClientDto[]> {
    const clients: Client[] = await this.clientModel.find();
    return plainToClass(ReadClientDto, clients);
  }

  async getClient(id: string): Promise<ReadClientDto> {
    const client: Client = await this.clientModel.findById(id);
    if (!client) throw new NotFoundException('Client does not exist');
    return plainToClass(ReadClientDto, client);
  }

  async createClient(req: CreateClientDto): Promise<ReadClientDto> {
    const newClient = new this.clientModel(req);
    const client: Client = await newClient.save();
    return plainToClass(ReadClientDto, client);
  }

  async updateClient(id: string, req: UpdateClientDto): Promise<ReadClientDto> {
    const updatedClient: Client = await this.clientModel.findByIdAndUpdate(
      id,
      { $set: req },
      { new: true },
    );
    if (!updatedClient) throw new NotFoundException('Client does not exist');
    return plainToClass(ReadClientDto, updatedClient);
  }

  async deleteClient(id: string): Promise<ReadClientDto> {
    const deletedClient: Client = await this.clientModel.findByIdAndDelete(id);
    if (!deletedClient) throw new NotFoundException('Client does not exist');
    return plainToClass(ReadClientDto, deletedClient);
  }
}
