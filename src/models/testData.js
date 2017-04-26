const testData = {
  login: {},
  reg: {},
  topSlides: {
    data: {
      v: '1.0',
      api: 'hyke.shop',
      ret: ['SUCCESS::\u8c03\u7528\u6210\u529f'],
      data: {
        count: '4',
        returnCode: '0',
        returnValue: [
          {
            imageWidth: 10,
            brandId: '0',
            id: 't1',
            image: '11111111111111111111111111111122',
            imageHight: 10,
            title: '\u8f6e\u64ad\u56fe1',
            state: '0',
            pdsId: 'pds1'
          },
          {
            imageWidth: 10,
            brandId: '0',
            id: 't2',
            image: '11111111111111111111111111111122',
            imageHight: 10,
            title: '\u8f6e\u64ad\u56fe2',
            state: '0',
            pdsId: 'pds1'
          },
          {
            imageWidth: 10,
            brandId: '0',
            id: 't3',
            image: '11111111111111111111111111111122',
            imageHight: 10,
            title: '\u8f6e\u64ad\u56fe3',
            state: '0',
            pdsId: 'pds1'
          },
          {
            imageWidth: 0,
            brandId: '0',
            id: 't4',
            image: '11111111111111111111111111111122',
            imageHight: 0,
            title: '\u8f6e\u64ad\u56fe4',
            state: '0',
            pdsId: 'pds1'
          }
        ]
      }
    },
    offset: 0,
    total: 1,
    limit: 20,
    msg: 'ok',
    errno: 0
  },
  bodyHot: {
    data: {
      ret: ['SUCCESS::\u8c03\u7528\u6210\u529f'],
      data: {
        count: '2',
        returnValue: [
          {
            appMainBodyDs: {
              size: 10,
              first: true,
              content: [
                {
                  image: '11111111111111111111111111111122',
                  imageHight: '50',
                  brandId: '0',
                  id: 'a1',
                  pdsId: 'pds1',
                  appMainBodyId: 'a',
                  state: '1',
                  title: '\u7279\u60e0\u5546\u54c11',
                  imageWidth: '50'
                }
              ],
              totalPages: 1,
              last: true,
              number: 0,
              numberOfElements: 2,
              totalElements: 2
            },
            id: 'a',
            imageWidth: '50',
            image: '11111111111111111111111111111122',
            state: '0',
            title: '\u5927\u724c\u7279\u60e0',
            imageHight: '50',
            pdsId: 'pds1',
            brandId: '0'
          },
          {
            appMainBodyDs: {
              size: 10,
              first: true,
              content: [
                {
                  image: '11111111111111111111111111111122',
                  imageHight: '50',
                  brandId: '0',
                  id: 'a2',
                  pdsId: 'pds2',
                  appMainBodyId: 'a',
                  state: '1',
                  title: '\u7279\u60e0\u5546\u54c12',
                  imageWidth: '50'
                }
              ],
              totalPages: 1,
              last: true,
              number: 0,
              numberOfElements: 2,
              totalElements: 2
            },
            id: 'a-1',
            imageWidth: '50',
            image: '11111111111111111111111111111122',
            state: '0',
            title: '\u6625\u5b63\u65f6\u88c5',
            imageHight: '50',
            pdsId: 'pds1',
            brandId: '0'
          }
        ],
        returnCode: '0'
      },
      api: 'hyke.shop',
      v: '1.0'
    },
    offset: 0,
    errno: 0,
    limit: 10,
    msg: 'ok',
    total: 1
  },
  hiSelect: {
    data: {
      ret: ['SUCCESS::\u8c03\u7528\u6210\u529f'],
      data: {
        count: '2',
        returnValue: [
          {
            appMainBodyDs: {
              size: 10,
              first: true,
              content: [
                {
                  image: '11111111111111111111111111111122',
                  imageHight: '50',
                  brandId: '0',
                  id: 'a1',
                  pdsId: 'pds1',
                  appMainBodyId: 'a',
                  state: '1',
                  title: '\u7279\u60e0\u5546\u54c11',
                  imageWidth: '50'
                }
              ],
              totalPages: 1,
              last: true,
              number: 0,
              numberOfElements: 2,
              totalElements: 2
            },
            id: 'a',
            imageWidth: '50',
            image: '11111111111111111111111111111122',
            state: '0',
            title: '\u5927\u724c\u7279\u60e0',
            imageHight: '50',
            pdsId: 'pds1',
            brandId: '0'
          },
          {
            appMainBodyDs: {
              size: 10,
              first: true,
              content: [
                {
                  image: '11111111111111111111111111111122',
                  imageHight: '50',
                  brandId: '0',
                  id: 'a2',
                  pdsId: 'pds2',
                  appMainBodyId: 'a',
                  state: '1',
                  title: '\u7279\u60e0\u5546\u54c12',
                  imageWidth: '50'
                }
              ],
              totalPages: 1,
              last: true,
              number: 0,
              numberOfElements: 2,
              totalElements: 2
            },
            id: 'a-1',
            imageWidth: '50',
            image: '11111111111111111111111111111122',
            state: '0',
            title: '\u6625\u5b63\u65f6\u88c5',
            imageHight: '50',
            pdsId: 'pds1',
            brandId: '0'
          }
        ],
        returnCode: '0'
      },
      api: 'hyke.shop',
      v: '1.0'
    },
    offset: 0,
    errno: 0,
    limit: 10,
    msg: 'ok',
    total: 1
  },
  detail: {  
    data: {
      api: 'hyke.shop',
      data: {
        returnValue: {
          type: '1', // 用这个字段判断衣服类型，不同类型，详情页面不同
          name: 'Apple/苹果 iPhone 6S',
          desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
          price: '5288 - 6888',
          id: '1',
          isSelected: true,
          color: [
            {text: '银色', value: '银色'},
            {text: '深空灰色', value: '深空灰色'},
            {text: '金色', value: '金色'},
            {text: '玫瑰金色', value: '玫瑰金色'}
          ],
          selectesColor: '2',
          slideImages: [
            {
              imageWidth: 10,
              brandId: '0',
              id: 't1',
              image: '11111111111111111111111111111122',
              imageHight: 10,
              title: '\u8f6e\u64ad\u56fe1',
              state: '0',
              pdsId: 'pds1'
            },
            {
              imageWidth: 10,
              brandId: '0',
              id: 't2',
              image: '11111111111111111111111111111122',
              imageHight: 10,
              title: '\u8f6e\u64ad\u56fe2',
              state: '0',
              pdsId: 'pds1'
            },
            {
              imageWidth: 10,
              brandId: '0',
              id: 't3',
              image: '11111111111111111111111111111122',
              imageHight: 10,
              title: '\u8f6e\u64ad\u56fe3',
              state: '0',
              pdsId: 'pds1'
            },
            {
              imageWidth: 0,
              brandId: '0',
              id: 't4',
              image: '11111111111111111111111111111122',
              imageHight: 0,
              title: '\u8f6e\u64ad\u56fe4',
              state: '0',
              pdsId: 'pds1'
            }
          ],
          size: [
            {text: '16GB', value: '16GB'},
            {text: '64GB', value: '64GB'},
            {text: '128GB', value: '128GB'},
            {text: '玫瑰金色', value: '玫瑰金色'}
          ],
          selectesSize: '0',
          cart: []
        },
        returnCode: '0'
      }
    },
    total: 1,
    errno: 0,
    msg: 'OK'
  },
  // 衣箱
  box: {
    data: {
      data: {
        title: '衣服描述',
        color: '黄色',
        size: 'S'
      }
    },
    errno: 0,
    msg: 'OK'
  }
}

export default function (p) {
  return new Promise(function (resolve, reject) {
    setTimeout(
      function () {
        const response = {
          // `data` is the response that was provided by the server
          data: {},

          // `status` is the HTTP status code from the server response
          status: 200,

          // `statusText` is the HTTP status message from the server response
          statusText: 'OK',

          // `headers` the headers that the server responded with
          headers: {},

          // `config` is the config that was provided to `axios` for the request
          config: {}
        }
        response.data = testData[p.apiName]
        response.config = p
        resolve(response)
      },
      300
    )
  })
}
