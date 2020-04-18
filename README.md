# react-demo
React demo

## Features
1. React v16
2. React Router v5
3. React Loadable v5
4. Emotion v10
5. Preset Style v2
6. Typescript v3.8
7. Webpack v4
8. Babel v7
9. Eslint v6
10. Commitlint v8
11. lint-staged v10
12. husky v4
13. Circle CI v2.1

## Get project

1. Clone the repository.
``` shell
git clone git@github.com:dotkiro/react-demo.git  # or use https
```

2. Install all node packages.
``` shell
npm install # or use yarn
```

3. And Then start your development server.
``` shell
npm start # or use yarn start
```

4. In the end, you will got a web page in your browser.

## Directory

```
react-demo
├── README.md
├── .gitignore
├── webpack.config.js
├── .babelrc.json
├── .commitlintrc.json
├── .eslintrc.json
├── tsconfig.json
├── LICENSE
├── package.json
├── src                      // put your source codes here
│   ├── index.html
│   ├── index.tsx            // enter point
│   ├── App.tsx
│   ├── components           // your components
│   │   ├── Loading.tsx
│   │   └── ...
│   │
│   ├── constants            // your constants
│   │   ├── index.ts
│   │   └── ...
│   │
│   ├── containers           // your containers
│   │   ├── Home.tsx
│   │   └── ...
│   │
│   ├── router               // your routes
│   │   ├── index.tsx
│   │   └── ...
│   │
│   ├── styles               // your styles
│   │   ├── index.css
│   │   ├── var.less
│   │   └── ...
│   │
│   ├── utils               // your utils
│   │   ├── index.ts
│   │   └── ...
│   │
│   └── assets               // youre other assets
│       ├── image.jpg
│       ├── iconfont.ttf
│       ├── image.svg
│       └── ...
└── dist                     // output directory
```
