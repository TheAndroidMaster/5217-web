// MDC
import {MDCRipple} from '@material/ripple';
import {MDCMenu} from '@material/menu';
import {MDCDialog} from '@material/dialog';


// Add 2 Home Screen enhancements

window.installPrompt = new Promise(resolve => {
  window.addEventListener('beforeinstallprompt', e => {
    // Prevent default, we want our own install banner
    e.preventDefault();
    // Pass the event
    resolve(e);
  });
});

('BeforeInstallPromptEvent' in window) && import('./a2hs');


// MDC initialisation

const rippleList = document.querySelectorAll('[data-mdc-auto-init="ripple"]');
Array.prototype.forEach.call(rippleList, el => new MDCRipple(el));

var aboutDialog = new MDCDialog(document.querySelector('#about-dialog'));
var settingsDialog = new MDCDialog(document.querySelector('#settings-dialog'));

aboutDialog.listen('MDCDialog:accept', function() {
  console.log('accepted');
})

aboutDialog.listen('MDCDialog:cancel', function() {
  console.log('bug');
})

document.querySelector('#about-dialog-trigger').addEventListener('click', function(evt) {
  aboutDialog.lastFocusedTarget = evt.target;
  aboutDialog.show();
})

settingsDialog.listen('MDCDialog:accept', function() {
  saveSettings();
})

settingsDialog.listen('MDCDialog:cancel', function() {
  console.log('canceled');
})

document.querySelector('#settings-dialog-trigger').addEventListener('click', function(evt) {
  settingsDialog.lastFocusedTarget = evt.target;
  settingsDialog.show();
})

let menu = new MDCMenu(document.querySelector('.mdc-menu'));
document.querySelector('#morebutton').addEventListener('click', () => menu.open = !menu.open);