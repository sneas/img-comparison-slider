#!/bin/sh

if [ -z "$GH_NAME" ] || [ -z "$GH_EMAIL" ]; then
 echo "GH_NAME and GH_EMAIL variables must be set"
 exit 1
fi

git config --global user.name "$GH_NAME"
git config --global user.email "$GH_EMAIL"

npm run gh --prefix packages/www -- -m "Automatically update gh-pages [skip ci]"
