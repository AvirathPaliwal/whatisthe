                class Roof {
                constructor(x,y,width,height){
                var position = {
                    isStatic:true
                }
                this.body = Bodies.rectangle(x,y,width,height,position);
                this.w=width
                this.h=height
                World.add(world,this.body);

                };
            display(){
                var pos = this.body.position
            rectMode(CENTER);
            fill("red")
            rect(pos.x,pos.y,this.w,this.h);
            
            
            }

            }