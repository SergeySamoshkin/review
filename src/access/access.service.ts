import { Injectable } from '@nestjs/common';
import {User} from "../user/entities/user.entity";

@Injectable()
export class AccessService {

  async checkAccess(user: User) {
      return user.hasAccess;
  }

}
