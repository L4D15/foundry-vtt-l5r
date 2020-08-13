/**
* Extend the basic ItemSheet with some very simple modifications
* @extends {ItemSheet}
*/
export class L5RItemSheet extends ItemSheet {
    
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["l5r", "sheet", "item"],
            template: "systems/l5r/templates/item/item-sheet.html",
            width: 520,
            height: 480,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}]
        });
    }

    getData() {
        const sheetData = super.getData();
        
        sheetData.data.dtypes = ["String", "Number", "Boolean"];
        
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
    * Update the item with data from the sheet.
    * @param event 
    * @param formData 
    */
    _updateObject(event, formData) {
        return this.object.update(formData);
    }
}
