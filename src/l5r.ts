/**
* This is your TypeScript entry file for Foundry VTT.
* Register custom settings, sheets, and constants using the Foundry API.
* Change this heading to be more descriptive to your system, or remove it.
* Author: [your name]
* Content License: [copyright and-or license] If using an existing system
* 					you may want to put a (link to a) license or copyright
* 					notice here (e.g. the OGL).
* Software License: [your license] Put your desired license here, which
* 					 determines how others may use and modify your system
*/

// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import { L5RActorSheet } from './module/actors/actor-sheet.js';
import { L5RActor } from './module/actors/actor.js';
import { L5RItem } from './module/items/item.js';
import { L5RItemSheet } from './module/items/item-sheet.js';
import { L5RWeaponSheet } from './module/items/weapon-sheet.js';
import { L5RFeatSheet } from './module/items/feat-sheet.js';

/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('l5r | Initializing l5r');
	
	// Assign custom classes and constants here
	CONFIG.Actor.entityClass = L5RActor;
	CONFIG.Item.entityClass = L5RItem;
	
	// Register custom system settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();
	
	// Register custom sheets (if any)
	// Actors sheet
	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("l5r", L5RActorSheet, { makeDefault: true });
	
	// Items sheet
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("l5r", L5RItemSheet, { types: ["item"], makeDefault: true });
	Items.registerSheet("l5r", L5RWeaponSheet, { types: ["weapon"], makeDefault: true });
	Items.registerSheet("l5r", L5RFeatSheet, { types: ["feat"], makeDefault: true });
	
	Handlebars.registerHelper('localizeSkillCategory', function(skillName) {
		const key = 'L5R.Skills.' + skillName + '.Title';
		return game.i18n.localize(key);
	});
	
	Handlebars.registerHelper('localizeSkill', function(skillCategory, skillName) {
		const key = 'L5R.Skills.' + skillCategory + '.' + skillName;
		return game.i18n.localize(key);
	});
	
	Handlebars.registerHelper('localizeRing', function(ringName) {
		const key = 'L5R.Rings.' + ringName;
		return game.i18n.localize(key);
	});
	
	Handlebars.registerHelper('localizeRingTip', function(ringName) {
		const key = 'L5R.Rings.' + ringName + "Tip";
		return game.i18n.localize(key);
	});
	
	Handlebars.registerHelper('localizeStanceTip', function(ringName) {
		const key = 'L5R.Conflict.Stances.' + ringName + "Tip";
		return game.i18n.localize(key);
	});
});

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the system is ready
});

// Add any additional hooks if necessary
