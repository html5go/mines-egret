/**
 * Created by Gruis on 2015-1-26
 */
module mineGame {
  /**
   * 地图
   */
  export class Mine extends egret.Bitmap {
    private posX:number;
    private posY:number;
    private burst:boolean;

    //private isExplode:boolean;

    public constructor(posX:number, posY:number) {
      var texture :egret.Texture = RES.getRes("minesImage");

      this.addEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);

      super(texture);
      this.posX = posX;
      this.posY = posY;
    }
    
    private onAddToStage(event:egret.Event){
      this.removeEventListener(egret.Event.ADDED_TO_STAGE,
          this.init, this);
    }

    /**初始化*/
    public init() {
      var sizeW = 40;
      this.width = sizeW;
      this.height = sizeW;
      this.burst = false;

      // 地雷的心跳动画
      var tw = egret.Tween.get(this, {loop: true});

      tw.to({width: sizeW - 3, height: sizeW - 3}, 400)
        .to({width: sizeW, height: sizeW}, 120)
        .to({width: sizeW - 4, height: sizeW - 4}, 400)
        .to({width: sizeW, height: sizeW}, 300)
        .wait(1000);

    }

    public burstOut() {

    }


  }
}