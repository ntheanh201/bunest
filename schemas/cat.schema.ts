import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({
    type: String,
  })
  name!: string;

  @Prop({
    type: Number,
  })
  age!: number;

  @Prop({
    type: String,
  })
  breed!: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
