export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "systems/l5r/templates"
		'systems/l5r/templates/actor/skills.html',
		'systems/l5r/templates/actor/social-standing.html',
		'systems/l5r/templates/actor/skill-category.html',
		'systems/l5r/templates/actor/skill.html',
		'systems/l5r/templates/actor/conflict.html',
		'systems/l5r/templates/actor/stance.html',
		'systems/l5r/templates/item/weapon-sheet.html',
		'systems/l5r/templates/item/items.html',
		'systems/l5r/templates/item/item-entry.html',
		'systems/l5r/templates/item/weapons.html',
		'systems/l5r/templates/item/weapon-entry.html',
		'systems/l5r/templates/actor/feats.html',
		'systems/l5r/templates/item/feat-sheet.html',
		'systems/l5r/templates/item/feat-entry.html'
	];

	return loadTemplates(templatePaths);
}
