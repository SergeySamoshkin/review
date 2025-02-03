import { Injectable } from '@nestjs/common';
import {User} from "../user/entities/user.entity";

@Injectable()
export class AccessService {

  async checkAccess(user: User) {
      const access = await this.tx
          .selectFrom('access')
          .select('*')
          .where('user', '=', user.id)
          .execute();

      return { hasAccess: access.hasAccess }
  }

}
