# UI Component Of StroyBook

框架语言基于`react`，`mdx`负责自定义组件文档，通过`rollup`进行打包

1. [Config](https://storybook.js.org/docs/react/configure/overview)
   *  初始化项目 `npx storybook init`  
   *  配置.storybook  
        * `main.js`，此文件控制 `Storybook` 服务行为，因此必须在更改后重新启动进程。  
            * stories 组件入口
            * staticDirs 静态资源
            * addons 插件挂载
            * babel 自定义babel
            * framework 框架语言
            * webpackFinal 自定义编译打包
            * features 最新特性，包括一些beta
        * `addons`，插件相关导入
        * `preview`，组件/文档预览效果自定义

2. [Docs](https://storybook.js.org/docs/react/writing-docs/introduction)  
   * DocsPage  
      1. 在安装`docs`插件后，`stories`中配置的组件文件会生成一个基础文档，文档内容主要有`组件实例`、`源代码`、`组件的props`、`组件所有args`，可被重写，具体案例参考[Button](./packages/Button/index.stories.tsx)
          ```JavaScript
          // page 可直接使用 addon-docs 插件中的 block
          // 也可引入 mdx|jsx|tsx|js 替代默认文档，设置为null时将不显示组件文档
          parameters: {
            docs: {
              page: CustomDocumentationComponent
            }
          }
          ```
   * MDX   
     1. 基于`markdown`，集成了`markdown`和`jsx`的写法  
     2. 代替`DocsPage`更加灵活的自定义组件文档，可单独作为的文档，也可将其替代默认的组件文档
     3. 借助`addon-docs/blocks`可在文档中插入组件实例

3. [Addons](https://storybook.js.org/docs/react/addons/introduction)  
   * addon-docs
      | block-name                                                                            | description                            |
      | :------------------------------------------------------------------------------------ | :------------------------------------- |
      | Anchor                                                                                |                                        |
      | [ArgsTable](https://storybook.js.org/docs/react/writing-docs/doc-block-argstable)     | 组件参数详解表，可动态的改变组件参数值 |
      | [Canvas](https://storybook.js.org/docs/react/writing-docs/doc-block-canvas)           |                                        |
      | [Description](https://storybook.js.org/docs/react/writing-docs/doc-block-description) |                                        |
      | DocsContext                                                                           |                                        |
      | DocsPage                                                                              |                                        |
      | DocsContainer                                                                         |                                        |
      | DocsStory                                                                             |                                        |
      | Heading                                                                               |                                        |
      | Meta                                                                                  |                                        |
      | Preview                                                                               |                                        |
      | Primary                                                                               |                                        |
      | Props                                                                                 |                                        |
      | [Source](https://storybook.js.org/docs/react/writing-docs/doc-block-source)           |                                        |
      | SourceContainer                                                                       |                                        |
      | Stories                                                                               |                                        |
      | [Story](https://storybook.js.org/docs/react/writing-docs/doc-block-story)             |                                        |
      | Subheading                                                                            |                                        |
      | Subtitle                                                                              |                                        |
      | Title                                                                                 |                                        |
      | Wrapper                                                                               |                                        |
      | types                                                                                 |                                        |
      | mdx                                                                                   |                                        |

   * addon-knobs
      | knobs-name  | description |
      | :---------- | :---------- |
      | text        |             |
      | boolean     |             |
      | number      |             |
      | color       |             |
      | object      |             |
      | select      |             |
      | radios      |             |
      | array       |             |
      | date        |             |
      | button      |             |
      | files       |             |
      | optionsKnob |             |
      | withKnobs   |             |

   * addon-actions
      | action-name      | description |
      | :--------------- | :---------- |
      | action           |             |
      | actions          |             |
      | configureActions |             |
      | decorateAction   |             |
      | withActions      |             |

4. [Test](https://storybook.js.org/docs/react/writing-tests/introduction)
