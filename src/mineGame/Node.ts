/**
 * Created by Gruis on 2015-1-26
 */
module mineGame {
  /**
   * 地图节点
   */
  export class Node extends egret.Bitmap {
    private posX:number;
    private posY:number;
    private isShow:boolean;
    public prenode:Node;  //寻路使用，路径前步

    public constructor(posX:number , posY:number) {
      var texture :egret.Texture = RES.getRes("mapImage");
      super(texture);

      this.posX = posX;
      this.posY = posY;
      this.width = 60;
      this.height = 60;
      this.isShow = true;
    }

    public hide(){
      this.texture = RES.getRes("mapImage");
      this.isShow = false;
    }

    public show(){
      this.isShow = true;
    }

    public getPos(){
      return [this.posX, this.posY];
    }

    public getState(){
      return this.isShow;
    }
  }
}