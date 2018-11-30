"use strict";

// Holds the base code for the app / website.
class appModal {
	constructor() {
		this.triggers = document.querySelectorAll('[data-trigger]');
		this.triggers.forEach(x => x.addEventListener('click', this.openEvent.bind(this, x)));

		this.setupModals();
	}
	
	// Handle modal opening
	openEvent(e) {
		let target = document.querySelector(e.getAttribute('data-trigger'));
		if( target == null )
			return;

		target.classList.add('active');
		setTimeout(e => target.classList.add('pretty'), 100);
	}

	// Handle modal closing
	closeEvent(modal) {
		modal.classList.remove('pretty');
		setTimeout(e => modal.classList.remove('active'), 300);
	}

	// Setup modals, add closer events and add click off watcher
	setupModals() {
		let modals = document.querySelectorAll('.modal');
		modals.forEach(e => {
			let closers = e.querySelectorAll('[data-closer]');
			closers.forEach( a => a.addEventListener('click', this.closeEvent.bind(this, e)));
			
			e.addEventListener('click', a => {
				if( a.target !== a.currentTarget )
					return;
				
				this.closeEvent(e);
			});
		});
	}
}

let app = new appModal();
