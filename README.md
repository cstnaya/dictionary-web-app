# dictionary-app

This template should help get you started developing with Vue 3 in Vite.

## Tools

1. Vue3
2. Vue router
3. Vite
4. ESLint + Prettier
5. TailwindCSS + PostCSS
6. Storybook
7. SCSS
8. Pinia
9. axios

## Memo

### 自製元件 - Switches

原本想找網路上現成的，結果會跟 Vue3 衝突，只好自己手寫。  
1. 想在自製元件上使用 `v-model` 的話，子元件必須宣告 `modelvalue` 和 `update:modelValue`
2. 詳細看[官方文件](https://vuejs.org/guide/extras/render-function.html#v-model)
3. 大家製作 Switch 的方式通常是用 `button` 包著一個 `input[type="checkbox"]`，按鈕上放置 `@click="$emit('update:modelValue', !modelvalue)"`
4. [Stackoverflow 上的教學](https://stackoverflow.com/a/72029776)

### 使用 Tailwind

透過 vite 搭建的 Vue 專案中使用 tailwind  
安裝方式如下：[官方手冊](https://tailwindcss.com/docs/guides/vite#vue)  
只要按照手冊教學通常都會成功

### 在 Storybook 中使用 TailwindCSS

[參考連結](https://www.kantega.no/blogg/setting-up-storybook-7-with-vite-and-tailwind-css)
1. `npx storybook init`
2. `npm run storybook`
3. 在目前版本中使用 vite + storybook 通常會搭建失敗，顯示錯誤
    - 解決方式：[看此 issue](https://github.com/storybookjs/builder-vite/issues/554#issuecomment-1422544989)，在 `package.json` 中加上 `overrides`
4. 在 .storybook/preview.js 中第一行加上 `import 'tailwindcss/tailwind.css'`

### 深色模式
[參考連結](https://tailwindcss.com/docs/dark-mode)

### 帶有中央線的 H1

[參考解答](https://stackoverflow.com/a/5214204)
此方法不需要 psudo-element

### 使用 `:key` 來強制 re-render 元件

1. `input` 裡的值在從 `/search?q=something` 切換 到 `/` 時要清除，但透過 `<router-link>` 回首頁的話元件不會重渲染，裡面的值也沒清除
2. 解決方式是在元件上加上 `:key="$route.path"`，這樣每次改變網址時 `key` 也會改變，元件會強制重渲染

### `created()` + `watch()` 透過 API 獲取外來資料

1. `created()` 中呼叫 `axios.get()` 這樣第一次搜尋時會發送請求
2. 但之後再搜尋的話，因為此元件已經建立了，所以不會再呼叫 created()，也就不會再發送請求
3. 加上 `watch()`，追蹤網址後方帶的參數是否改變，如果改了就再請求
4. (todo: 也許不需要 `created()`)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
