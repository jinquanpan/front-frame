const path = require('path')
const cwd = process.cwd()

const url = {
  dev:3666,
  prod:3667
}

const basePath = (env) => {
  return {
    prod:`//114.132.223.168:${url[env.MODE]}/`,
    dev:path.resolve(cwd,'build')
  }
}

module.exports = function (env,branch) {
  console.log(111,env)
  let projectPath = env.MODE === 'prod' ? basePath(env).prod : basePath(env).dev;
  let projectConfig = require(path.resolve(cwd ,'project' ,branch ,'config'));
  const branchConfig = require(path.resolve(cwd ,'project' ,branch ,'package.json'))

  return {
    appPath: projectPath,
    store: path.join(branchConfig.name, branchConfig.version),
    path: path.resolve(cwd,'project',branch),
    cwd: cwd,
    pathConfig: projectConfig[env.MODE],
    branchConfig: branchConfig
  }
}