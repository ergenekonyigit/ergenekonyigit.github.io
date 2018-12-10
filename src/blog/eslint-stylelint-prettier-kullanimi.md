---
title: 'VSCode: ESLint, Stylelint ve Prettier''ı sorunsuz kullanmak'
author: 'Ergenekon Yiğit ([@ergenekonyigit](https://twitter.com/ergenekonyigit)), Software Engineer'
avatars:
  - ergenekon-yigit
date: 2018-12-10
tags:
  - javascript
  - web
  - frontend
  - vscode
  - prettier
  - eslint
  - stylelint
description: 'ESLint ve Stylelint kullanılan projeye Prettier eklemek'
---

Kod yazan her insanın kendine özgü bir yazım stili var. Bazı diller farklılıkların önüne geçebilmek için kendi style guidelarına göre formatterlara sahipler. Go(gofmt) ve ReasonML(refmt) bunlara örnek gösterilebilir. Javascript dilinde bu tarz bir çözüm dil ile birlikte gelmiyor, bunun için çeşitli yardımcı paketler kullanmamız gerekmekte. Prettier bu konuda en popüler çözüm olarak göze çarpıyor. Ancak daha önce bu konuda uğraşanlar da anlayacaktır ki projede hem linter hem de formatterı aynı anda kullanmak istersek bazı sorunlar ortaya çıkabiliyor. Örneğin linterın kuralları ile formatterın kuralları birbirini ezip kodu okunamaz hale getirebiliyor. VSCode içerisinde bu paketlerin uyumlu çalışmasını sağlamak için yapmamız gereken birkaç şey var.

```bash
yarn add --dev prettier-eslint prettier-eslint-cli prettier-stylelint
```

VSCode içerisinde entegrasyon için bu 3 aracın eklentisini yüklememiz gerek. Eklentiler;
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

Ardından projemiz içerisinde <code>.vscode/settings.json</code> içerisine şu ayarları eklemeliyiz.

```json
// .vscode/settings.json
{
  "prettier.eslintIntegration": true,
  "prettier.stylelintIntegration": true,
  "eslint.autoFixOnSave": false,
  "editor.formatOnSave": true
}
```

<code>.eslintrc.json</code> dosyasına prettierın ruleslarını kullanacağımızı belirtiyoruz.

```json
// .eslintrc.json
{
  "parser": "babel-eslint",
  "extends": ["prettier", "react-app", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"],
    "jsx-a11y/href-no-hash": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
}
```

<code>package.json</code> içersine bu scriptleri ekledikten sonra işlem tamamdır.

```json
// package.json
{
  "scripts": {
    "fix-code": "prettier-eslint --write 'source/**/*.{js,jsx}' ",
    "fix-styles": "prettier-stylelint --write 'source/**/*.{css,scss}' "
  }
}
```

Artık projede kaç kişi çalışıyorsa çalışın, codebase tek elden çıkmış şekilde olacak. Kod okunabilirliği açısından önemli detaylardan birini halletmiş olduk.

Dilerseniz <code>husky</code> tarzı pre-commit araçları kullanarak her commit atıldığında otomatik tüm codebasei formatlayabilirsiniz.

```json
// .lintstagedrc
{
  "*.js": [
    "yarn fix-code",
    "git add"
  ],
  "*.scss": [
    "yarn fix-styles",
    "git add"
  ]
}
```
