import { sidebarConfig } from "../configs";
import sidebarEditor from "./sidebarEditor";
import { system, world } from '@minecraft/server';

system.runInterval(()=>{
    if(!(sidebarConfig.get("enabled") ? true : false)) return;
    for(const player of world.getPlayers()) {
        let sidebarName = sidebarEditor.getSidebarNames()[0];
        let tag = player.getTags().find(_=>_.startsWith('sidebar:'));
        if(tag) sidebarName = tag.substring('sidebar:'.length);
        player.onScreenDisplay.setTitle(sidebarEditor.parseEntireSidebar(player, sidebarName));
    }
},1);