import { Injectable } from '@nestjs/common';
import { CreateMonsterDto } from '../dto/create-monster.dto';
import { UpdateMonsterDto } from '../dto/update-monster.dto';
import { Monster } from '../entities/monster.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MonstersService {
  constructor(
    @InjectModel(Monster.name) private monsterModel: Model<Monster>,
  ) {}
  create(createMonsterDto: CreateMonsterDto): Promise<Monster> {
    const createdMonster = new this.monsterModel(createMonsterDto);
    return createdMonster.save();
  }

  findAll(): Promise<Monster[]> {
    return this.monsterModel.find();
  }

  async findOne(id: string): Promise<Monster> {
    try {
      return await this.monsterModel.findById(id);
    } catch (error) {
      throw new Error(
        `Error when searching for monster with ID ${id}: ${error.message}`,
      );
    }
  }

  async update(
    id: string,
    updateMonsterDto: UpdateMonsterDto,
  ): Promise<Monster> {
    return await this.monsterModel.findByIdAndUpdate(id, updateMonsterDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Monster> {
    return await this.monsterModel.findByIdAndDelete(id).lean();
  }

}
