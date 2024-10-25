# gogo-vue3-admin

## 项目说明

### 简介

`gogo-vue3-admin`是一款中后台管理系统前端模板，使用了最新的 `Vue3`、 `Vite`、`Element-Plus`、`TypeScript`、`Pinia`、`Tailwindcss` 等主流技术开发。

项目是本萌新练手用的，出现错误在所难免，仅供参考

### 技术栈

本项目使用 Vue 官方脚手架 [create-vue](https://github.com/vuejs/create-vue) 创建，使用`pnpm`作为包管理工具

- 主要技术栈：Vue3、Vite5、Vue Router、Pinia、Typescript
- 代码规范：ESLint、Prettier

## 安装使用

### 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (请禁用 Vetur).

### 配置 Vite

See [Vite Configuration Reference](https://vite.dev/config/).

### Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 开发过程

**这里记录本项目的开发过程**

### 创建项目

使用`pnpm create vue@latest`创建项目

### 代码规范

#### Prettier

Prettier 在我们创建项目的时候已经自动安装好并且有了默认配置 `.prettierrc.json`，可以按照自己的需求进行更改。

可以创建一个 `.prettierignore` 文件以忽略不需要格式化的文件。

本项目中，删掉了默认的配置文件`.prettierrc.json`，添加了新的`.prettierrc.cjs`

#### ESLint

ESlint 在我们创建项目的时候已经自动安装好并且有了默认配置 `.eslintrc.cjs`，可以按照自己的需求进行更改。

启用 ESLint IDE 插件，比如 [ESLint for VSCode](https://gitee.com/link?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Ddbaeumer.vscode-eslint)，然后你就可以在开发时获得规范检查器的反馈。这同时也避免了启动开发服务器时不必要的规范检查

#### commitlint

commitlint 是一个 git commit 校验约束工具。

> 就是当我们运行 `git commmit -m 'xxx'` 时，来检查 `'xxx'` 是不是满足团队约定好的提交规范的工具。

安装

```
pnpm i -D @commitlint/config-conventional @commitlint/cli @commitlint/types
```

配置 `commitlint.config.ts`

```
import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
    'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
    'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-case': [
      RuleConfigSeverity.Error,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'], //type必须小写，否则报错
    'type-empty': [RuleConfigSeverity.Error, 'never'], //type不能为空，否则报错
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build', //影响构建系统或外部依赖项的更改（示例：gulp、broccoli、npm、webpack）
        'chore', //不修改src或者test的其余修改，例如构建过程或辅助工具的变动
        'ci', //与CI（持续集成服务）有关的改动
        'docs', //只改动了文档相关的内容
        'feat', //增加新功能
        'fix', //修复bug
        'perf', //提升性能的改动
        'refactor', //代码重构
        'revert', //撤销提交（创建一个全新的提交来撤消先前提交所做的更改）
        'style', //不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        'test', //添加测试或者修改现有测试
      ],
    ],
  },
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

module.exports = Configuration;
```

#### husky

**husky**可以在项目中植入你设定的 git hooks，在 git 提交代码的前后，你预设的 git hooks 可以得到执行，以对代码、文件等进行预设的检查，一旦检查不通过，就可以阻止当前的代码提交，避免了不规范的代码和 git 提交出现在项目中

本项目使用`husky v9`版本，与 v4 版本用法有区别，请注意

##### 安装

```bash
npm install --save-dev husky
```

##### 初始化

`init` 命令简化了项目中的 husky 设置。它会在 `.husky/` 中创建 `pre-commit` 脚本，并更新 `package.json` 中的 `prepare` 脚本。随后可根据你的工作流进行修改。

```bash
npx husky init
```

##### 使用

以下是使用示例：

###### `pre-commit `

修改 `.husky/pre-commit` 文件内容为：

```bash
npx lint-staged
```

###### `commit-msg`

创建一个 `.husky/commit-msg` 的 hook 文件, 修改文件内容为：

```bash
npx --no-install commitlint --edit $1
```

启用后，以后提交代码时，都会对代码的提交格式进行校验

###### `pre-push`

创建一个 `.husky/pre-push` 的 hook 文件, 修改文件内容为：

```bash
npm run build
```

以上确保我们只有在代码构建成功的时候才可以将代码推送到远程仓库中
