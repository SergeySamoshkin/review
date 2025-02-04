import { Injectable } from '@nestjs/common';
import {User} from "../user/entities/user.entity";
import {txHost} from "../types/tx-host";

@Injectable()
export class AccessService {

  constructor(private readonly tx: txHost) {}

  async checkAccess(user: User) {
      const access = await this.tx
          .selectFrom('access')
          .select('*')
          .where('user', '=', user.id)
          .execute();

      return { hasAccess: access.hasAccess }
  }

}
