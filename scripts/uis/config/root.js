import icons from "../../api/icons";
import config from "../../config";
import { ActionForm } from "../../lib/form_func";
import uiManager from "../../uiManager";

uiManager.addUI(config.uiNames.ConfigRoot, "Config Root", (player)=>{
    let actionForm = new ActionForm();
    actionForm.button(`§2Leaf Settings\n§r§7Common settings`, icons.resolve("Packs/Asteroid/jungle_leaves"), (player)=>{
        player.sendMessage(`§cThis feature is coming soon`);
        uiManager.open(player, config.uiNames.ConfigRoot)
    })
    actionForm.button(`§cUI Builder\n§r§7Make UIs easily!`, icons.resolve("Packs/Asteroid/ui"), (player)=>{
        uiManager.open(player, config.uiNames.UIBuilderRoot)
    })
    actionForm.button(`§6Chest GUIs\n§r§7Make Chest UIs easily!`, icons.resolve("Packs/Asteroid/chest_tappable"), (player)=>{
        uiManager.open(player, config.uiNames.ChestGuiRoot)
    })
    actionForm.button(`§bSidebar\n§r§7Make sidebars easily!`, `textures/azalea_icons/Sidebar`, (player)=>{
        uiManager.open(player, config.uiNames.SidebarEditorRoot)
    })
    actionForm.show(player, false, ()=>{})
})