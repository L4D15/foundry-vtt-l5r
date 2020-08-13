
/**
* Extends the actor to process special things from L5R.
*/
export class L5RActor extends Actor {
    
    prepareData() {
        super.prepareData();
        
        const actorData = this.data;
        const data = actorData.data;
        const isCharacter = actorData.type === "character";
        
        if (isCharacter) {
            data.endurance = (Number(data.rings.earth) + Number(data.rings.fire)) * 2;
            data.composure = (Number(data.rings.earth) + Number(data.rings.water)) * 2;
            data.focus = Number(data.rings.air) + Number(data.rings.fire);
            data.vigilante = Math.floor((Number(data.rings.air) + Number(data.rings.water)) / 2);
            data.void_points.max = data.rings.void;
            
            // Make sure void points are never greater than max
            if (data.void_points.current > data.void_points.max) {
                data.void_points.current = data.void_points.max;
            }
        }
    }
}