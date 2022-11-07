import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";

const models = [{ model: User, schema: UserSchema }];

const modelProvider = models.map(item => {
    return MongooseModule.forFeature([
        { name: item.model.name, schema: item.schema }
    ])
})

@Global()
@Module({
    imports: [...modelProvider],
    exports: [...modelProvider]
})
export class MongoCollectionsModule { };