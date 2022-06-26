const env = {
  MODE:'prod', // prod 打包正式 dev测试打包
  PROJECT: process.argv.slice(2),
}
module.exports = {
  'env': {...env},
}