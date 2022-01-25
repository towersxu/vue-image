import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class CustomNode extends HtmlNode {
  setHtml(rootEl) {
    // const { properties } = this.props.model; // 解构出自定义节点的属性，若需要在html中用到它们的话
    const el = document.createElement('div');
    el.className = 'alipay';
    // const html = `<img src=${require("@/assets/alipay.svg")} alt="">`;
    const html = `<img style='width:100%' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zMDE3XzMwNjU3KSI+DQo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIxMiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik02LjU1MTc5IDEyLjkwMjdDNi4wMjE0MyAxMi45NTYzIDUuMDIyMzIgMTMuMTg5MyA0LjQ3ODU3IDEzLjY2ODdDMi44NDQ2NCAxNS4wODg0IDMuODIyMzIgMTcuNjg2NiA3LjEzMDM2IDE3LjY4NjZDOS4wNTM1NyAxNy42ODY2IDEwLjk3NDEgMTYuNDYyNSAxMi40ODIxIDE0LjQ5OTFDMTAuMzMzOSAxMy40NTcxIDguNTE1MTggMTIuNzA5OCA2LjU1MTc5IDEyLjkwMjdaTTE4Ljg4NjYgMTQuNjk3M0MyMS41Njc5IDE1LjU5MiAyMy4wMzA0IDE1Ljg0OTEgMjMuMzUxOCAxNS44OTczQzIzLjc4MjcgMTQuNjQzMiAyNC4wMDE4IDEzLjMyNjEgMjQgMTJDMjQgNS4zNzMyMSAxOC42MjY4IDAgMTIgMEM1LjM3MzIxIDAgMCA1LjM3MzIxIDAgMTJDMCAxOC42MjY4IDUuMzczMjEgMjQgMTIgMjRDMTYuMTc1OSAyNCAxOS44NTM2IDIxLjg2NTIgMjIuMDA0NSAxOC42Mjk1QzE5Ljk3OTUgMTcuODMxMyAxNi4yODMgMTYuMzUyNyAxNC4zMjIzIDE1LjQxMjVDMTIuNDUgMTcuNzA4IDEwLjAzMzkgMTkuMTAzNiA3LjUyNjc5IDE5LjEwMzZDMy4yODM5MyAxOS4xMDM2IDEuODQ1NTQgMTUuNDA0NSAzLjg1MTc5IDEyLjk2OTZDNC4yODgzOSAxMi40MzkzIDUuMDM1NzEgMTEuOTMzIDYuMTkwMTggMTEuNjQ2NEM3Ljk5ODIxIDExLjIwNDUgMTAuODc3NyAxMS45MjIzIDEzLjU3NSAxMi44MDg5QzE0LjA1OTggMTEuOTE3IDE0LjQ2OTYgMTAuOTM2NiAxNC43NzIzIDkuODkxOTZINi40NTgwNFY5LjA1MzU3SDEwLjc0MzhWNy41NDgyMUg1LjU1MjY4VjYuNzA5ODJIMTAuNzQzOFY0LjU2NDI5QzEwLjc0MzggNC41NjQyOSAxMC43NDM3IDQuMjAyNjggMTEuMTEwNyA0LjIwMjY4SDEzLjIwNTRWNi43MDk4MkgxOC4zNDAyVjcuNTQ4MjFIMTMuMjA4VjkuMDUzNTdIMTcuMzk3M0MxNi45OTU1IDEwLjY5MDIgMTYuMzg3NSAxMi4xOTgyIDE1LjYyNDEgMTMuNTIxNEMxNi44OTY0IDEzLjk3OTUgMTguMDM3NSAxNC40MTM0IDE4Ljg4NjYgMTQuNjk3M1oiIGZpbGw9IiMyMTY5RkIiLz4NCjwvZz4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJjbGlwMF8zMDE3XzMwNjU3Ij4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K" alt=""/>`;
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
  type: 'alipay',
  view: CustomNode,
  model: CustomNodeModel
};
