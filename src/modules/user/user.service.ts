import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/database/schemas/user.schema';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async createUser(userDeatils: UserDetails) {
    try {
      const user = new this.userModel(userDeatils);
      const savedUser = await user.save();
      return savedUser;
    } catch (e) {
      throw e;
    }
  }

  async getUser(query: UserDetails, limit) {
    try {
      const user = await this.userModel
        .find(query)
        .sort({
          createdAt: 'desc',
        })
        .limit(limit)
        .maxTimeMS(5000)
        .exec();

      return user;
    } catch (e) {
      throw e;
    }
  }

  async updateUser(userId: string, userDeatils: UserDetails) {
    try {
      const updatedUser = await this.userModel
        .updateOne({ _id: userId }, userDeatils)
        .exec();
      return updatedUser;
    } catch (e) {
      throw e;
    }
  }

  async deleteUser(userId: string) {
    try {
      await this.userModel.deleteOne({ _id: userId });
      return { success: true };
    } catch (e) {
      throw e;
    }
  }
}

interface UserDetails {
  firstName: string;
  lastName: string;
  userId: string;
  email: string;
  phoneNumber: string;
  country: string;
}
