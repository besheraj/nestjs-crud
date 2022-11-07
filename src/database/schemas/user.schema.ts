import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type UserDocument = User & Document;

@Schema({timestamps: true})

export class User {
    @Prop({ type: String})
    firstName: string;

    @Prop({ type: String})
    lastName: string;

    @Prop({ type: String})
    userId: string;

    @Prop({ type: String})
    email: string;

    @Prop({ type: String})
    phoneNumber: string;

    @Prop({ type: String})
    country: string;

}

export const UserSchema = SchemaFactory.createForClass(User)
