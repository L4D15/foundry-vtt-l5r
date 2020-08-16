import { L5RItemSheet } from "./item-sheet.js";

/**
* @extends {ItemSheet}
*/
export class L5RWeaponSheet extends L5RItemSheet {
    
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["l5r", "sheet", "weapon"],
            template: "systems/l5r/templates/item/weapon-sheet.html",
            width: 520,
            height: 480,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}]
        });
    }
    
    getData() {
        const sheetData = super.getData();
        sheetData.data.dtypes = ["String", "Number", "Boolean"];
        
        sheetData.data.isWeapon = true;
        sheetData.data.isEquipment = true;
        
        return sheetData;
    }
    
    /**
    * Subscribe to events from the sheet.
    * @param html HTML content of the sheet.
    */
    activateListeners(html) {
        super.activateListeners(html);
        
        // Everything below here is only needed if the sheet is editable
        if (!this.options.editable) return;
    }
    
    /**
    * Update item with values from the sheet.
    * @param event 
    * @param formData 
    */
    _updateObject(event, formData) {
        return this.object.update(formData);
    }
}