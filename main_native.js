const AdventureGame = require('./adventure-game');
const NativePlatformAdapter = require('./adapter/platform-adapter_native');
const CommandInterpreter = require('./command-interpreter');

const platformAdapter = new NativePlatformAdapter();
const adventureGame = new AdventureGame(platformAdapter);

const commands = {
    help: {
        parameters: [],
        description: 'Display adventure game help',
        handler: (params, platformAdapter) => {platformAdapter.displayMessage('Help!')}
    },
    default: 'help'
};

const commandInterpreter = new CommandInterpreter(platformAdapter, commands);

adventureGame.init();