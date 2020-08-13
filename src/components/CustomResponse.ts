class CustomResponse {
  code: number;
  msg: string;
  data: any;
  constructor(code = 200, msg = '', data = null) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

export default CustomResponse;