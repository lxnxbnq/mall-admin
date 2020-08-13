import UMSService from '@src/service/UMSService';
import { GET } from '@src/utils/decorator';
import CustomResponse from '@src/components/CustomResponse';


export default class ErrorController {

  @GET('/ums/list')
  async findUMSUser(ctx) {
    const { page, limit } = ctx.query;
    const data = await UMSService.findUMSUser(page, limit);
    ctx.body = new CustomResponse(200, '', data);
  }

  @GET('/ums/role')
  async findUMSRole(ctx) {
    const { page, limit } = ctx.query;
    const data = await UMSService.findUMSRole(page, limit);
    ctx.body = new CustomResponse(200, '', data);
  }
}
