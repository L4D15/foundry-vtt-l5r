import { RangeNumber } from "../data/range-number";
import { Rings } from "../data/rings";

export type L5RActorData = {
    feats: Item<any>[];
    endurance: number;
    composure: number;
    focus: number;
    vigilante: number;
    void_points: RangeNumber;
    rings: Rings;
}