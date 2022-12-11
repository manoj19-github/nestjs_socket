import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'manoj', text: 'hello world' }];
  clientToUser = {};
  create(createMessageDto: CreateMessageDto): Message {
    const message = { ...createMessageDto };
    this.messages.push(createMessageDto);
    return message;
  }

  findAll(): Message[] {
    return this.messages;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }
  async getClientById(clientId: string) {
    return this.clientToUser[clientId];
  }
}
