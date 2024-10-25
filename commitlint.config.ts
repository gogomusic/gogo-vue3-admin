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
