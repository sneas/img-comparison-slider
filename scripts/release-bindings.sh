set -e

for project in bindings/*/; do
    cd $project
    npm install
    npm i -S $npm_package_name@$npm_package_version
    npm run build
    npm version $npm_package_version
    npm publish
done
