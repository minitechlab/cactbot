'use strict';
const fs = require('fs');
const path = require('path');

const lodash = require('lodash');
const fsExtra = require('fs-extra');
const { exec } = require('@actions/exec');

const pkg = require('../../package.json');

const projectRoot = path.join(__dirname, '..', '..');

const npmrc = '//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}\nalways-auth=true';

async function main() {
  // force pwd to at .../cactbot/
  process.chdir(projectRoot);

  fs.rmSync('npm-package', { recursive: true, force: true });
  fs.rmSync('dist', { recursive: true, force: true });
  fs.mkdirSync('npm-package');

  await exec('npx tsc -p tsconfig.npm.json --declaration');
  fs.renameSync('dist/ui', 'npm-package/ui');
  fsExtra.copySync('types', 'npm-package/types', {});
  fs.renameSync('dist/resources', 'npm-package/resources');
  fs.renameSync('dist/util', 'npm-package/util');

  fs.writeFileSync('npm-package/.npmrc', npmrc);

  const newPackageJSON = {
    type: 'module',
    ...lodash.pick(pkg, ['name', 'version', 'license', 'repository', 'files']),
  };

  fs.writeFileSync('npm-package/package.json', JSON.stringify(newPackageJSON, null, 2));
}

main().catch((e) => {
  throw e;
});
