import { Injectable } from '@nestjs/common';
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
    monster.goldBalance += amount;
    return monster.save();
  }

  async removeGold(id: string, amount: number): Promise<Monster> {
    const monster = await this.monsterModel.findById(id);
    monster.goldBalance -= amount;
    return monster.save();
  }
}