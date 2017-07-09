class CommandInterpreter {
    constructor(platformAdapter, commands) {
        this._platformAdapter = platformAdapter;
        this._commands = commands;

        this._platformAdapter.on('command', command => this._interpretCommand(command));
    }

    /**
     * @param {[String]} command
     * @private
     */
    _interpretCommand(command) {
        const commandName = command[0];
        const commandArgs = command.splice(1);

        let commandDefinition = this._commands[commandName];

        // Command unrecognised
        if(!commandDefinition) {
            const defaultCommandName = this._commands.default;
            commandDefinition = this._commands[defaultCommandName];

            this._platformAdapter.displayMessage('Unrecognised command: ' + commandName);

            // Command unrecognised and no default command set
            if(!commandDefinition) {
                return;
            }
        }

        commandDefinition.handler(commandArgs, this._platformAdapter);
    }
}

module.exports = CommandInterpreter;