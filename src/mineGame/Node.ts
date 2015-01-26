/**
 * Created by Gruis on 2015-1-26
 */
module mineGame {
  /**
   * 地图节点
   */
  export class Node extends egret.Bitmap {
    private posX: number;
    private posY: number;
    private isShow:boolean;
    public prenode:Node;  //寻路使用，路径前步

    public constructor(posX:number , posY:number) {
      var texture :egret.Texture = RES.getRes("minesImage");

      this.posX = posX;
      this.posY = posY;
      super(texture);
      this.width = 60;
      this.height = 60;
      this.isShow = true;

      // 地雷的心跳动画
      var tw = egret.Tween.get(this, {loop: true});
      tw.to({width:56, height:56}, 400)
        .to({width:60, height:60}, 120)
        .to({width:55, height:55}, 400)
        .to({width:60, height:60}, 300)
        .wait(1000);
    }

    public hide(){
      this.texture = RES.getRes("minesImage");
      this.isShow = true;
    }

    public show(){
      this.prenode = null;
    }

    public getPos(){
      return [this.posX, this.posY];
    }

    public getState(){
      return this.isShow;
    }
  }
}