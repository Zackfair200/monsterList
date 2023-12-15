import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Monster } from '../entities/monster.entity';
import { Model } from 'mongoose';

@Injectable()
export class GoldService {
  constructor(
    @InjectModel(Monster.name) private monsterModel: Model<Monster>,
  ) {}

  async addGold(id: string, amount: number): Promise<Monster> {
    const monster = await this.monsterModel.findById(id);
    if (!monster) {
        throw new NotFoundException(`Monster with ID ${id} not found`);
      }

    monster.goldBalance += amount;
    return monster.save();
  }

  async removeGold(id: string, amount: number): Promise<Monster> {
    const monster = await this.monsterModel.findById(id);

    if (!monster) {
        throw new NotFoundException(`Monster with ID ${id} not found`);
      }

    if (monster.goldBalance - amount < 0) {
    throw new BadRequestException(`Cannot make the monster go into debt!`);
    }

    monster.goldBalance -= amount;
    return monster.save();
  }
}