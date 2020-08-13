import { UmsAdmin, UmsRole } from '../entity/UMSEntity';
import { getManager } from "typeorm";

export default class UMSService {

  static async findUMSUser(limit, page) {
    const errorRepository = getManager().getRepository(UmsAdmin);
    return errorRepository.find({
      take: limit,
      skip: (page - 1) * limit
    });
  }

  static async findUMSRole(limit, page) {
    const errorRepository = getManager().getRepository(UmsRole);
    return errorRepository.find({
      take: limit,
      skip: (page - 1) * limit
    });
  }
}
