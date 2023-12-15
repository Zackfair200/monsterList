import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MonstersService } from '../services/monsters.service';
import { CreateMonsterDto } from '../dto/create-monster.dto';
import { UpdateMonsterDto } from '../dto/update-monster.dto';
import { MikeGuard } from '../guards/mike.guard';
import { ValidationPipe } from '@nestjs/common';

@Controller('monsters')
export class MonstersController {
  constructor(private readonly monstersService: MonstersService) {}

  @Post()
  @UseGuards(MikeGuard)
  create(@Body(new ValidationPipe()) createMonsterDto: CreateMonsterDto) {
    return this.monstersService.create(createMonsterDto);
  }

  @Get()
  findAll() {
    return this.monstersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monstersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(MikeGuard)
  update(@Param('id') id: string, @Body() updateMonsterDto: UpdateMonsterDto) {
    return this.monstersService.update(id, updateMonsterDto);
  }

  @Delete(':id')
  @UseGuards(MikeGuard)
  remove(@Param('id') id: string) {
    return this.monstersService.remove(id);
  }

  @Patch(':id/add-gold')
  @UseGuards(MikeGuard)
  async addGold(@Param('id') id: string, @Body('amount') amount: number) {
    try {
      return await this.monstersService.addGold(id, amount);
    } catch (error) {
      throw new Error(
        `Error adding gold to monster with ID ${id}: ${error.message}`,
      );
    }
  }

  @Patch(':id/remove-gold')
  @UseGuards(MikeGuard)
  async removeGold(@Param('id') id: string, @Body('amount') amount: number) {
    try{
      return this.monstersService.removeGold(id, amount);
    } catch (error) {
      throw new Error(
        `Error when removing gold from monster with ID ${id}: ${error.message}`,
      );
    }
  }
}
