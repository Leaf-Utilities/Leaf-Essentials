import { system, world } from "@minecraft/server";
import config from "../config";
import uiManager from "../uiManager";
import { ModalForm } from "../lib/form_func";
import actionParser from "../api/actionParser";

uiManager.addUI(config.uiNames.EntityEditor, "Entity Editor", (player, entity)=>{
    let command = "";
    try {
        command = entity.getDynamicProperty('interact');
    } catch {command=""};
    if(!command) command = "";
    let modalForm = new ModalForm();
    modalForm.textField("On Interaction Command", "/say hi", command);
    modalForm.show(player, false, (player, response)=>{
        if(response.canceled || response.cancelled) return;
        entity.setDynamicProperty('interact', response.formValues[0]);
    })
})

world.beforeEvents.playerInteractWithEntity.subscribe(e=>{
    if(e.itemStack && e.itemStack.typeId == "leaf:entity_editor") {
        system.run(()=>{
            uiManager.open(e.player, config.uiNames.EntityEditor, e.target);

        })
    }
    let command = "";
    try {
        command = e.target.getDynamicProperty('interact');
    } catch {command=""};
    if(!command) command = "";
    if(command) {
        e.cancel = true;
        system.run(()=>{
            actionParser.runAction(e.player, command);
        })
    }
})