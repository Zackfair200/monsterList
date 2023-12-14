import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MonsterDocument = HydratedDocument<Monster>;
@Schema()
export class Monster {
  @Prop({ 
    required: true
})
  firstName: string;

  @Prop({ 
    required: true 
})
  lastName: string;

  @Prop({ 
    required: true 
})
  title: string;

  @Prop({ 
    required: true,
    enum: ['female', 'male', 'other'] 
})
  gender: string;

  @Prop({ 
    required: true 
})
  description: string;

  @Prop({ 
    type: [String], 
    required: true 
})
  nationality: string[];

  @Prop({ 
    required: false 
})
  image: string;

  @Prop({ 
    default: 0 
})
  goldBalance: number;

  @Prop({ 
    default: 5.2 
})
  speed: number;

  @Prop({ 
    default: 105 
})
  health: number;

  @Prop()
  secretNotes?: string;

  @Prop({ 
    required: true 
})
  monsterPassword: string;
}

export const MonsterSchema = SchemaFactory.createForClass(Monster);
