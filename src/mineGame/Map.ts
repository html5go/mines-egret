/**
 * Created by Gruis on 2015-1-15
 */
module mineGame {
  /**
   * 地图
   */
  export class Map extends egret.DisplayObjectContainer {
    private map : any[] = [];
    private mapSize: number = 6;

    public constructor() {
      super();
      this.addEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);
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
      var len:number = this.mapSize;

      var i:number;
      var j:number;
      var node : mineGame.Node;

      //var txt:egret.TextField;
      for(i = 0 ; i < len ; i++) {
        this.map[i] = [];

        for(j = 0 ; j < len + 4; j++) {

          node = new mineGame.Node(i, j);
          node.x = i * 65;
          node.y = j * 65;
          this.map[i][j] = node;
          node.addEventListener(egret.TouchEvent.TOUCH_TAP,
              this.onNodeClick, this);
          this.addChild(node);
        }
      }

    }

    private onNodeClick(){

    }

  }
}