Hooks.once("ready", async () => {
	game.settings.register("wfrp4e-sounds", "checkPath", {
		name: game.i18n.localize("WFRP4E.Sounds.checkPath.Name"),
		hint: game.i18n.format("WFRP4E.Sounds.checkPath.Hint", {label: game.i18n.localize("SETTINGS.SoundEffects")}),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
	if (game.user.isGM && game.settings.get("wfrp4e", "soundPath") != "modules/wfrp4e-sounds/sounds/" && !game.settings.get("wfrp4e-sounds", "checkPath")) {
		confirm = await foundry.applications.api.DialogV2.confirm({
			window: {title: game.modules.get("wfrp4e-sounds").title},
			content: `
				<p>${game.i18n.format("WFRP4E.Sounds.Dialog.Content", {label: game.i18n.localize("SETTINGS.SoundEffects")})}</p>
				<p style="text-align: center;">${game.i18n.localize("WFRP4E.Sounds.Dialog.Path")}: <em>"${game.settings.get("wfrp4e", "soundPath") || game.i18n.localize("WFRP4E.Sounds.Dialog.Empty")}"</em>. ${game.i18n.localize("WFRP4E.Sounds.Dialog.Confirm")}</p>
				<a style="text-align: right; color: wheat;"><em>${game.i18n.localize("WFRP4E.Sounds.Dialog.Hide")}</em></a>
			`,
			render: (event, dialog) => {
				dialog.element.querySelector("a").addEventListener("click", function() {
					if (!game.settings.get("wfrp4e-sounds", "checkPath")) {
						game.settings.set("wfrp4e-sounds", "checkPath", true);
						this.style.color = "darkgreen";
					} else {
						game.settings.set("wfrp4e-sounds", "checkPath", false);
						this.style.color = "wheat";
					};
				});
			}
		});
		if (confirm) {game.settings.set("wfrp4e", "soundPath", "modules/wfrp4e-sounds/sounds/")};
	};
});