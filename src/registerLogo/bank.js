import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class CustomNode extends HtmlNode {
  setHtml(rootEl) {
    // const { properties } = this.props.model; // 解构出自定义节点的属性，若需要在html中用到它们的话
    const el = document.createElement('div');
    el.className = 'bank';
    // const html = `<img src=${require("@/assets/bank.svg")} alt="">`;
    const html = `<img style='width:100%' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjMDI5QkE1Ii8+DQo8cGF0aCBkPSJNMTQuMTAxMiAxNC4wMDM0SDE1LjI4NzVWMTUuMTQxMUgxNC4xMDEyVjE0LjAwMzRaTTE1LjU2MjkgMTQuMDAzNEgxNi43NDg0VjE1LjE0MTFIMTUuNTYyOVYxNC4wMDM0Wk0xNy4wODc5IDE0LjAwMzRIMTguMjczOFYxNS4xNDExSDE3LjA4NzlWMTQuMDAzNEgxNy4wODc5Wk00IDE1Ljc5MDVDNCAxNi40NTU2IDQuNjQ4NDEgMTcgNS40NDA2OCAxN0gxOC41NTc0QzE5LjM1MDggMTcgMjAgMTYuNDU1NiAyMCAxNS43OTA1VjEwLjcwNjFINC4wMDAwMlYxNS43OTA1SDRaTTE4LjU1NzQgN0g1LjQ0MDdDNC42NDg0MyA3IDQuMDAwMDIgNy41NDQwNyA0LjAwMDAyIDguMjA4ODZWOS41NTk5NkgyMFY4LjIwODg2QzIwIDcuNTQ0MDcgMTkuMzUwOCA3IDE4LjU1NzQgN0gxOC41NTc0WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K" alt=""/>`;
    el.innerHTML = html;
    rootEl.innerHTML = ''; // 需要先把之前渲染的子节点清除掉。
    rootEl.appendChild(el);
  }
}

class CustomNodeModel extends HtmlNodeModel {
  setAttributes() {
    this.width = 50;
    this.height = 50;
    // this.text.editable = true; // 双击图形是否可编辑文本，默认可编辑
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
  type: 'bank',
  view: CustomNode,
  model: CustomNodeModel
};
