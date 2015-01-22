/**
 * Created by Gruis on 2015-1-15
 */
module mineGame {
  /**
   * 地图
   */
  export class Map extends egret.DisplayObjectContainer {
    public constructor() {
      super();
      this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    
    private onAddToStage(event:egret.Event){
      this.removeEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);
    }

    /**初始化*/
    public init(){
      this.createMap();
    }

    /**创建地图**/
    private createMap(){

    }

  }
}