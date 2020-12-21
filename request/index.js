export const request = (params)=> {
    return new Promise((resolve,reject) => {
        wx.request({
            ...params,
            success: function(res) {
                resolve(res)
            },
            fail: function(error) {
                reject(error)
            }
        });
          
    })
}
