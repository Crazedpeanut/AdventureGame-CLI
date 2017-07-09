const EventEmitter = require('events');

class NativePlatformAdapter extends EventEmitter {

    constructor() {
        super();
    }

    receiveCommandLine(string) {
        const commandArgsArray = String(chunk).split('\n');
        this.emit('command', commandArgsArray);
    }

    displayMessage(string) {
        process.stdout.write(`${string}\n`);
    }
}

module.exports = NativePlatformAdapter;