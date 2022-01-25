<template>
  <div class="home">
    <div ref="graph" id="graph" class="graph"></div>
    <Menus
      @toggleEdgeType="toggleEdgeType"
      @undo="undo"
      @redo="redo"
      @getSnapshot="getSnapshot"
      @printData="printData"
    />
  </div>
</template>

<script>
import alipay from "@/registerLogo/alipay.js";
import wechat from "@/registerLogo/wechat.js";
import bank from "@/registerLogo/bank.js";

import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css"; // 引入拓展插件样式
import Menus from "@/components/menus.vue";
import {
  DndPanel,
  Menu,
  // Control,
  SelectionSelect,
  NodeResize,
  Snapshot,
} from "@logicflow/extension";
LogicFlow.use(DndPanel); // 使用左侧拖拽框插件
LogicFlow.use(Menu); // 使用菜单插件
// LogicFlow.use(Control); // 使用右上角控制面板插件
LogicFlow.use(SelectionSelect); // 使用多选插件
// 自定义缩放节点的控制icon样式
NodeResize.style.controlPoint = {
  ...NodeResize.style.controlPoint,
  width: 7,
  height: 7,
  fill: "#000", // 点改为黑色
};
LogicFlow.use(NodeResize); // 使用缩放节点大小插件 目前只支持矩形，椭圆，菱形，自定义的节点需单独设置
LogicFlow.use(Snapshot);
const list = [
  { type: "text", label: "文本框" },
  { type: "wechat", label: "微信" },
  { type: "alipay", label: "支付宝" },
  { type: "bank", label: "银行卡" },
];
export default {
  name: "Home",
  components: {
    Menus,
  },
  data() {
    return {
      lf: null, // logicFlow实例对象
      graphData: null,
      isSelect: false, // 是否框选
    };
  },
  created() {
    // 测试数据
    if (sessionStorage.getItem("graphData")) {
      this.graphData = JSON.parse(sessionStorage.getItem("graphData"));
    } else {
      this.graphData = {
        nodes: [
          {
            id: "828c254f-b4f1-4bfa-8112-eed8014c4fa3",
            type: "wechat",
            x: 700,
            y: 297,
            properties: {},
            text: {
              x: 700,
              y: 337,
              value: "微信",
            },
          },
          {
            id: "6aa52bcc-636e-4b64-9006-1628774d2ea3",
            type: "wechat",
            x: 463,
            y: 474,
            properties: {},
            text: {
              x: 463,
              y: 514,
              value: "微信",
            },
          },
          {
            id: "07b15a99-00fc-4af4-becc-75b3f1597613",
            type: "alipay",
            x: 462,
            y: 377,
            properties: {},
            text: {
              x: 462,
              y: 417,
              value: "支付宝",
            },
          },
        ],
        edges: [
          {
            id: "8c4e56e1-756e-469e-a0ea-15782fe8e302",
            type: "bezier",
            sourceNodeId: "828c254f-b4f1-4bfa-8112-eed8014c4fa3",
            targetNodeId: "6aa52bcc-636e-4b64-9006-1628774d2ea3",
            startPoint: {
              x: 675,
              y: 297,
            },
            endPoint: {
              x: 488,
              y: 474,
            },
            properties: {},
            pointsList: [
              {
                x: 675,
                y: 297,
              },
              {
                x: 575,
                y: 297,
              },
              {
                x: 588,
                y: 474,
              },
              {
                x: 488,
                y: 474,
              },
            ],
          },
          {
            id: "4a0d9bf6-34b7-4998-b774-4eb783afac66",
            type: "bezier",
            sourceNodeId: "828c254f-b4f1-4bfa-8112-eed8014c4fa3",
            targetNodeId: "07b15a99-00fc-4af4-becc-75b3f1597613",
            startPoint: {
              x: 675,
              y: 297,
            },
            endPoint: {
              x: 487,
              y: 377,
            },
            properties: {},
            pointsList: [
              {
                x: 675,
                y: 297,
              },
              {
                x: 575,
                y: 297,
              },
              {
                x: 587,
                y: 377,
              },
              {
                x: 487,
                y: 377,
              },
            ],
          },
        ],
      };
    }
  },
  mounted() {
    this.lf = new LogicFlow({
      container: this.$refs.graph,
      grid: false, // 打开背景网格
      keyboard: { enabled: true }, // 允许键盘快捷键操作,cmd + c 或 ctrl + c	复制节点cmd + v 或 ctrl + v	粘贴节点cmd + z 或 ctrl + z	撤销操作cmd + y 或 ctrl + y	回退操作backspace	删除操作
      // snapline: false, // 默认开启对齐线，也可关闭
      background: {
        backgroundColor: "#f7f9fc",
        backgroundImage: "url(../assets/water.png)",
        backgroundRepeat: "repeat",
      },
    });
    // 追加右键菜单栏功能
    this.lf.addMenuConfig({
      // 右键节点
      nodeMenu: [
        {
          text: "属性",
          icon: true,
          className: "node-attribute", // icon的类名。
          callback(node) {
            alert(`
          节点id：${node.id}
          节点类型：${node.type}
          节点坐标：(x: ${node.x}, y: ${node.y})`);
          },
        },
      ],
      // 右键线
      edgeMenu: [
        {
          text: "属性",
          callback(edge) {
            alert(`
          边id：${edge.id}
          边类型：${edge.type}
          边坐标：(x: ${edge.x}, y: ${edge.y})
          源节点id：${edge.sourceNodeId}
          目标节点id：${edge.targetNodeId}`);
          },
        },
      ],
      // 右键画布
      graphMenu: [
        {
          text: "分享",
          callback() {
            alert("分享成功");
          },
        },
      ],
    });
    // 指定类型的节点或边单独定义属于它自己的菜单
    // lf.setMenuByType({
    //   type: "wechat",
    //   menu: [
    //     {
    //       text: "分享111",
    //       callback() {
    //         console.log("分享成功222！");
    //       },
    //     },
    //   ],
    // });
    this.lf.register(alipay); // 注册重写后的节点
    this.lf.register(wechat); // 注册重写后的节点
    this.lf.register(bank); // 注册重写后的节点

    // 拖拽面板
    // 创建拖拽面板对于列表的映射
    let dragList = list.map((item) => {
      return {
        type: item.type,
        text: item.label,
        label: item.label,
        // icon: require(`@/assets/${item.type}.svg`), require貌似不能用
      };
    });
    this.lf.setPatternItems(dragList); // 内置插件，将列表渲染成默认样式的左侧拖拽菜单
    // 渲染数据
    this.lf.render(this.graphData);
  },
  // watch: {
  //   isSelect(newVal) {
  //     if (newVal) {
  //       this.lf.openSelectionSelect(); // 开启框选
  //     } else {
  //       this.lf.closeSelectionSelect(); // 取消框选
  //     }
  //   }
  // },
  methods: {
    // 更改连线的方式
    toggleEdgeType(type) {
      this.lf.graphModel.edgeType = type; // 直线(line) 直角折线(polyline) 贝塞尔曲线(bezier)
    },
    undo() {
      this.lf.undo(); // 撤销
    },
    redo() {
      this.lf.redo(); // 取消上次撤销
    },
    getSnapshot() {
      this.lf.getSnapshot(); // LogicFlow导出图片
    },
    printData() {
      const graphData = this.lf.graphModel.modelToGraphData();
      sessionStorage.setItem("graphData", JSON.stringify(graphData));
      console.log(graphData);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  .graph {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    // 右键菜单样式
    ::v-deep .lf-menu {
      padding: 0;
      width: 100px;
      box-shadow: 0px 0px 3px;
    }
    // 为所有右键菜单项的icon统一设置样式
    ::v-deep .lf-menu-item-icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-size: 20px;
      background-repeat: no-repeat;
      vertical-align: middle;
      margin-right: 5px;
    }
    ::v-deep .node-attribute {
      .lf-menu-item-icon {
        background-image: url("../assets/heart.png"); // 为自定义类名下的icon设置背景
      }
    }
    // 左侧拖拽图标栏
    ::v-deep .lf-dndpanel {
      top: 100px;
      display: flex;
      flex-wrap: wrap;
      width: 160px;
      .lf-dnd-item {
        width: 80px;
        height: 66px;
        .lf-dnd-shape {
          background-size: 100%;
        }
      }
    }
  }
}
</style>
