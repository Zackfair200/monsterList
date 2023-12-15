import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MonstersController } from './controllers/monsters.controller';
import { MonstersService } from './services/monsters.service';
import { Monster, MonsterSchema } from './entities/monster.entity';
import { GoldController } from './controllers/gold.controller';
import { GoldService } from './services/gold.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: Monster.name, 
        schema: MonsterSchema 
      }
    ]),
  ],
  controllers: [MonstersController,GoldController],
  providers: [MonstersService,GoldService],
})
export class MonstersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    
  }
}