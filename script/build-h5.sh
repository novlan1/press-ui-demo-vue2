npm run build:h5
cd dist/build/h5 
git init
git remote add origin git@github.com:novlan1/press-ui-demo.git
git add .
git commit -m"docs: 文档构建"
git push -u origin master --force