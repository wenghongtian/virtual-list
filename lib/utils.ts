export function observeDomHeightChange(dom: HTMLElement, callback: () => void) {
  // 创建一个观察器实例，并传入回调函数
  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (
        mutation.type == "attributes" &&
        mutation.attributeName == "style" &&
        mutation.target == dom
      ) {
        // 遍历所有变动，如果发现节点高度发生变化，调用回调函数
        callback();
        break;
      }
    }
  });

  // 配置观察选项
  var config = { attributes: true, childList: false, subtree: false };

  // 传入目标节点和观察选项
  observer.observe(dom, config);
  return observer.disconnect;
}
