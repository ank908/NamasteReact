🚀 Namaste React
01.Inception module contains

1. Inception
2. Igniting the app
3. Laying the foundation

Below are the commands used

Git Commands

ssh-keygen -t ed25519 -C "kumarankur908@gmail.com"
cat ~/.ssh/id_ed25519.pub\n
ssh -T git@github.com\n

git intit
touch .gitignore
git add .
git commit -m "chapter01"
git remote add origin git@github.com:ank908/NamasteReact.git
git pull --rebase origin main
git status
git add <conflict-file>
git rebase --continue
git push -u origin main

npm init
npm install -D parcel //for dev dependencies
npm install //to regenerate node_module

//to execute a package use npx
//It creates dev build
npx parcel index.html//parcel is web pack to ignite and bundle our app and define entry point as index.html

//for prod build
npx parcel build index.html

//good way to insert react in package so that no extra call is made for package
npm install react
npm i react-dom

//script to create dev and prod build where run is optional
npm [run] start
npm run build

^ minor changes ~ major changes

browserslist with parcel works for those browser versions

#Parcel Read parcel documentation
dev build
Local Server
HMR -> Hot module replacement
by using file watching algorithm - written in c++
caching faster builds
Image optimization
minification
bundling
compressing
consistent hashing
code splitting
differential bundling - support older browsers
diagnostic
error handling
support for https
Tree shaking algo => will remove unused code
different dev prod build
