set -e

ROOT=$PWD

for project in bindings/*/; do
    cd $project
    echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" >> .npmrc
    npm install
    npm i -S $npm_package_name@$npm_package_version
    npm run build
    npm version $npm_package_version
    npm publish
    cd $ROOT
done
