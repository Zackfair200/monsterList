import { Controller, Post, Body, Param, UseGuards, Patch } from '@nestjs/common';
import { MikeGuard } from '../guards/mike.guard';
import { MonstersService } from '../services/monsters.service';
import { GoldService } from '../services/gold.service';


@Controller('gold')
export class GoldController {
  constructor(
    private readonly goldService: GoldService
    ) {}

  @Patch(':id/add-gold')
  @UseGuards(MikeGuard)
  async addGold(@Param('id') id: string, @Body('amount') amount: number) {
    try {
      return await this.goldService.addGold(id, amount);
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
      return this.goldService.removeGold(id, amount);
    } catch (error) {
      throw new Error(
        `Error when removing gold from monster with ID ${id}: ${error.message}`,
      );
    }
  }
}