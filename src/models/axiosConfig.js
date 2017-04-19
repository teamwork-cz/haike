
export default {
  baseURL: 'http://rapapi.org/mockjsdata/17098',
  timeout: 30000,
  method: 'post', // default
  transformRequest: [
    function (data) {
      // Do whatever you want to transform the data
      return JSON.stringify(data)
      // return data;
    }
  ],
  transformResponse: [
    function (data) {
      // Do whatever you want to transform the data
      return JSON.parse(data)
    }
  ],
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}
