import { HtmlNode, HtmlNodeModel } from '@logicflow/core';
class CustomNode extends HtmlNode {
  setHtml(rootEl) {
    // const { properties } = this.props.model; // 解构出自定义节点的属性，若需要在html中用到它们的话
    const el = document.createElement('div');
    el.className = 'wechat';
    const html = `<img style='width:100%' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNTJDNDFBIi8+DQo8cGF0aCBkPSJNNy4zNzM2OSA5LjA2NDU1QzYuODgxNDkgOS4wNjQ1NSA2LjM5ODY0IDguNzYxNzcgNi4zOTg2NCA4LjMxMjE2QzYuMzk4NjQgNy44NTM3NyA2Ljg4MTUyIDcuNTU5NzcgNy4zNjQzMiA3LjU1OTc3QzcuODU2NTIgNy41NTk3NyA4LjE3MjIxIDcuODUzODMgOC4xNzIyMSA4LjMxMjE2QzguMTgxNTcgOC43NjE4NiA3Ljg1NjQ2IDkuMDY0NTUgNy4zNzM2NyA5LjA2NDU1SDcuMzczNjlaTTExLjg5NTcgNy41NTk3NUMxMi4zODc5IDcuNTU5NzUgMTIuNzAzNiA3Ljg1MzgyIDEyLjcwMzYgOC4zMTIxNEMxMi43MDM2IDguNzYxODUgMTIuMzg3OSA5LjA2NDU0IDExLjg5NTcgOS4wNjQ1NEMxMS40MTI4IDkuMDY0NTQgMTAuOTIwNyA4Ljc2MTc2IDEwLjkyMDcgOC4zMTIxNEMxMC45MjA3IDcuODUzNzYgMTEuNDEyOCA3LjU1OTc1IDExLjg5NTcgNy41NTk3NVpNMTUuMzc3OSA5LjE5NDE4QzE1LjU4MjIgOS4xOTQxOCAxNS43ODY1IDkuMjAyODkgMTYgOS4yMjg3M0MxNS40MzM2IDYuNzk4NzIgMTIuNjQ3OCA1IDkuNDcyMTQgNUM1LjkxNTc4IDUgMy4wMDAwMiA3LjI1NzAyIDMgMTAuMTE5NUMzIDExLjc3OTkgMy45NjU2OCAxMy4xMjkgNS41OTA2OSAxNC4xODRMNC45NDA3MSAxNkw3LjIwNjQ2IDE0Ljk0NUM4LjAxNDM2IDE1LjA5MTkgOC42NjQzNyAxNS4yNDc3IDkuNDcyMjIgMTUuMjQ3N0M5LjY2NzE2IDE1LjI0NzcgOS44NzE0OCAxNS4yMzkgMTAuMDc1NyAxNS4yMjE4QzkuOTQ1OCAxNC44MjQgOS44NzE0NyAxNC4zOTE2IDkuODcxNDcgMTMuOTU5MkM5Ljg3MTQ3IDExLjMzMDQgMTIuMjk1IDkuMTk0MzIgMTUuMzc3OSA5LjE5NDMyTDE1LjM3NzkgOS4xOTQxOFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTcuMjc0NiAxMi44NjY4QzE2Ljk1ODcgMTIuODY2OCAxNi42MzM1IDEyLjU1MjIgMTYuNjMzNSAxMi4yMjg0QzE2LjY0MjggMTEuOTA0NSAxNi45NTg4IDExLjU4MDkgMTcuMjc0NiAxMS41ODA5QzE3Ljc2NyAxMS41ODA5IDE4LjA5MjIgMTEuOTA0NyAxOC4wOTIyIDEyLjIyODRDMTguMDkyMiAxMi41NTIzIDE3Ljc2NjkgMTIuODY2OCAxNy4yNzQ2IDEyLjg2NjhaTTEzLjcxNjQgMTIuODY2OEMxMy40MDA0IDEyLjg2NjggMTMuMDc1MiAxMi41NTIyIDEzLjA3NTIgMTIuMjI4NEMxMy4wNzUyIDExLjkwNDYgMTMuNDAwNSAxMS41ODA5IDEzLjcxNjQgMTEuNTgwOUMxNC4yMDg4IDExLjU4MDkgMTQuNTI0NyAxMS45MDQ3IDE0LjUyNDcgMTIuMjI4NEMxNC41MzQgMTIuNTUyMyAxNC4yMDg3IDEyLjg2NjggMTMuNzE2NCAxMi44NjY4Wk0yMSAxMy42ODA5QzIxIDExLjEgMTguNDA4IDkgMTUuNSA5QzEyLjQyNDkgOSAxMCAxMS4wOTk5IDEwIDEzLjY4MDlDMTAgMTYuMjYxOCAxMi40MjQ4IDE4LjM1MjUgMTUuNSAxOC4zNTI1QzE2LjE1MDMgMTguMzUyNSAxNi44MDA3IDE4LjE4NiAxNy40NDE4IDE4LjAyODZMMTkuMjI1NiAxOUwxOC43MzMyIDE3LjM5MDRDMjAuMDMzOCAxNi40MTkxIDIxIDE1LjEzMzMgMjEgMTMuNjgwOUwyMSAxMy42ODA5WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K" alt=""/>`;
    el.innerHTML = html;
    rootEl.innerHTML = ''; // 需要先把之前渲染的子节点清除掉。
    rootEl.appendChild(el);
  }
}

class CustomNodeModel extends HtmlNodeModel {
  setAttributes() {
    this.width = 50; // 节点宽
    this.height = 50; // 节点高
  }
  // 锚点位置通过中心点和宽度算出来。
  getDefaultAnchor() {
    const { width, height, x, y, id } = this;
    return [
      {
        x: x - width / 2,
        y,
        name: 'left',
        id: `${id}_0`
      },
      {
        x: x + width / 2,
        y,
        name: 'right',
        id: `${id}_1`
      },
      {
        x,
        y: y - height / 2,
        name: 'top',
        id: `${id}_2`
      },
      {
        x,
        y: y + height / 2,
        name: 'bottom',
        id: `${id}_3`
      },
      {
        x: x - Math.sqrt(Math.pow(width / 2, 2) / 2),
        y: y - Math.sqrt(Math.pow(height / 2, 2) / 2),
        name: 'top-left',
        id: `${id}_4`
      },
      {
        x: x + Math.sqrt(Math.pow(width / 2, 2) / 2),
        y: y - Math.sqrt(Math.pow(height / 2, 2) / 2),
        name: 'top-right',
        id: `${id}_5`
      },
      {
        x: x - Math.sqrt(Math.pow(width / 2, 2) / 2),
        y: y + Math.sqrt(Math.pow(height / 2, 2) / 2),
        name: 'bottom-left',
        id: `${id}_6`
      },
      {
        x: x + Math.sqrt(Math.pow(width / 2, 2) / 2),
        y: y + Math.sqrt(Math.pow(height / 2, 2) / 2),
        name: 'bottom-right',
        id: `${id}_7`
      }
    ];
  }
  initNodeData(data) {
    // 可以在super之前，强制设置节点文本位置不居中，而且在节点下面
    if (!data.text || typeof data.text === 'string') {
      data.text = {
        value: data.text || '',
        x: data.x,
        y: data.y + 40
      };
    }
    super.initNodeData(data);
  }
}

export default {
  type: 'wechat',
  view: CustomNode,
  model: CustomNodeModel
};
