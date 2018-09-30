import {EventEmitter, Input} from '@angular/core';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';
import {Hero} from '../classes/characters/hero';

export class PlayerWindow {
  @Input() active: SwitchesWindowsActive;
  @Input() hero: Hero;
  @Input() emitter: EventEmitter<any>;

}
