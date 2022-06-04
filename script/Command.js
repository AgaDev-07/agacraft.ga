import minecraft from 'mojang-minecraft';

export class Commands {
  constructor(prefix) {
    this._prefix = prefix;
    this._commands = {};
    /**
     *  @param {minecraft.Player} sender
     */
    this._notCommand = sender => sender.runCommand('tellraw @s {"rawtext":"§4Command not found"}')
    minecraft.world.events.beforeChat.subscribe(this.run);
  }
  /**
   *
   * @param {String} name
   * @param {(config: { args: String[], sendToTargets: Boolean, targets: minecraft.Player[], sender: minecraft.Player }) => String} callback
   */
  setCommand(name, callback) {
    this._commands[this._prefix + name] = callback;
  }
  /**
   * @param {(sender: minecraft.Player) => any} callback
   */
  notCommand(callback) {
    if(typeof callback == 'function')
    this._notCommand = callback
  }
  /**
   * @param {minecraft.BeforeChatEvent} ChatEvent
   */
  run(ChatEvent) {
    if (ChatEvent.message.startsWith(this._prefix)) {
      const args = ChatEvent.message.split(' ').filter(arg => arg != '');
      ChatEvent.cancel = true;
      if (Object.keys(this._commands).filter(cmd => cmd == args[0])[0])
        this._commands[args[0]]({
          args,
          sendToTargets: ChatEvent.sendToTargets,
          targets: ChatEvent.targets,
          sender: ChatEvent.sender,
        });
      else this._notCommand(ChatEvent.sender);
    }
  }
}
new Commands('!').setCommand('hello');
