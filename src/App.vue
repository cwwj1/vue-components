<template>
  <div id="app">
    <h1>组件使用说明文档</h1>
    
    <div class="wrap">

      <div class="components">
        <a>图片热区组件</a>
      </div>

      <div class="content">

        <div class="use-wrap">
          <p class="tip">基本用法</p>
          <p class="text">绘制图片热区</p>
          <a class="text" target="_blank" href="https://cwwj1.github.io/vue-imagemap/">在线运行，点击查看</a>
          <div class="description">
            demo效果增加图片上传功能，开发者可自定义组合组件使用
          </div>
          

          <div class="demo-wrap">
            <!-- 组件demo -->
            <image-demo class="image-demo"></image-demo>
            <!-- 代码demo -->
            <div class="code-wrap" v-if="showCode">

              <pre>
                <code class="hljs">
                  <span class="hljs">

                    <span class="hljs-tag">&lt;<span class="hljs-name">image-map</span>
                      <span class="hljs-attr">class</span>=<span class="hljs-string">"image-map-demo"</span>
                      <span class="hljs-attr">:image</span>=<span class="hljs-string">"image"</span>
                      <span class="hljs-attr">:zones</span>=<span class="hljs-string">"zones"</span>
                      <span class="hljs-attr">@add</span>=<span class="hljs-string">"add"</span>
                      <span class="hljs-attr">@change</span>=<span class="hljs-string">"change"</span>
                      <span class="hljs-attr">@remove</span>=<span class="hljs-string">"remove"</span>
                      <span class="hljs-attr">@close</span>=<span class="hljs-string">"close"</span>&gt;
                    </span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">image-map</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>

                    <span class="javascript">
                      <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                          <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">zones</span>: 
                            [{<span class="hljs-attr">topPer</span>: <span class="hljs-string">0.3076</span>, 
                            <span class="hljs-attr">leftPer</span>: <span class="hljs-string">0.1777</span>, 
                            <span class="hljs-attr">widthPer</span>: <span class="hljs-string">0.1521</span>, 
                            <span class="hljs-attr">heightPer</span>: <span class="hljs-string">0.3559</span>, 
                            <span class="hljs-attr">link</span>: <span class="hljs-string">"http://m.beibei.com"</span>}],

                            <span class="hljs-attr">image</span>: <span class="hljs-string">''</span>
                          };
                        },
                        <span class="hljs-attr">methods</span>: {
                          add(zone) {
                            <span class="hljs-built_in">console</span>.log('成功添加热区：', zone);
                          },
                          remove(index) {
                            <span class="hljs-built_in">console</span>.log('成功删除热区：', index);
                          },
                          change(zones) {
                            <span class="hljs-built_in">console</span>.log('热区发生变化：', zones);
                          },
                          close(zones) {
                            
                          }
                        }
                      }
                    </span>

                    <span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                  </span>
                </code>
              </pre>
              
            </div>
            <div class="demo-block-control">
              <span v-if="showCode" @click="doHideCode">隐藏代码</span>
              <span v-if="!showCode" @click="doShowCode">显示代码</span>
            </div>
          </div>
        </div>

        <div class="attribute-wrap table-wrap">
          <p class="tip">Attribute</p>
          <table class="table">
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>image</td>
                <td>必填参数，图片地址</td>
                <td>string</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>zones</td>
                <td>选填参数，默认热区</td>
                <td>array</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="methods-wrap table-wrap">
          <p class="tip">Events</p>
          <table class="table">
            <thead>
              <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>add</td>
                <td>新增热区时触发的事件</td>
                <td>zone(新增的热区信息)</td>
              </tr>
              <tr>
                <td>change</td>
                <td>热区变化时触发的事件</td>
                <td>zones(变化后的热区信息)</td>
              </tr>
              <tr>
                <td>remove</td>
                <td>删除热区时触发的事件</td>
                <td>index(删除热区的index)</td>
              </tr>
              <tr>
                <td>close</td>
                <td>取消绘制热区时触发的事件</td>
                <td>zones(热区信息)</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import imageDemo from './components/imageDemo'

export default {
  name: 'App',
  components: {
    imageDemo
  },
  data () {
    return {
      showCode: false,
    }
  },
  methods: {
    doShowCode() {
      this.showCode = true;
    },
    doHideCode() {
      this.showCode = false;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrap {
  width: 100%;
}

.components {
  width: 20%;
  height: 90%;
  display: inline-block;
  color: #409eff;
      float: left;
          text-align: center;
}

.components span {
  display: inline-block;
  text-align: center;
  width: 100%;
}

.content {
  display: inline-block;
  width: 70%;
}
.tip {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 28px;
    margin: 0;
}
.text {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    display: inline-block;
    margin: 10px;
}

.description {
  padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px 0;
    background-color: #fff;
}

.demo-wrap {
    border: 1px solid #ebebeb;
    border-radius: 3px;
}
.image-demo {
  margin: 20px;
}
.code-wrap {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
}
.demo-block-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #409eff;
    cursor: pointer;
}


.table-wrap {
  margin-top: 30px;
}

.table {
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    text-align: center;
}

.hljs {
    margin: 0;
    border: none;
    max-height: none;
    border-radius: 0;
}
.hljs-built_in, .hljs-doctag, .hljs-keyword, .hljs-name, .hljs-section, .hljs-selector-class, .hljs-selector-id, .hljs-selector-tag, .hljs-strong, .hljs-tag, .hljs-title, .hljs-type {
    color: #3182bd;
}
.hljs-addition, .hljs-meta, .hljs-string, .hljs-symbol, .hljs-template-tag, .hljs-template-variable {
    color: #756bb1;
}
</style>
