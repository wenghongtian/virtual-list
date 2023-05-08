import { VirtualOptions } from "./type";

const defaultOptions: VirtualOptions = {
  itemHeight: "auto",
  total: 0,
  bufferSize: 5,
};

export class VirtualList {
  private total = 0;
  private itemHeight: number | "auto" = "auto";
  private bufferSize = 5;

  constructor(container: HTMLDivElement, options: VirtualOptions) {
    const { total, itemHeight, bufferSize } = Object.assign(
      {},
      defaultOptions,
      options
    );
    this.total = total;
    this.itemHeight = itemHeight;
    this.bufferSize = bufferSize;
  }
}
