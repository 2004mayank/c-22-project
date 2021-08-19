class Chain{

    constructor(p,q){
   var options={
      bodyA:p,
      pointB:q ,
      length:200

   }

 this.chain=Constraint.create(options)
 World.add(world,this.chain);


}
    

 display() {
   
    if (this.chain.bodyA ){
       stroke ("white")
       strokeWeight (3)
      
       line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
             
               }
     

      
    }

    
       
    

    disconectStone(){
       this.chain.bodyA=null 
    }



 }
