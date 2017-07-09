const EventEmitter = require('events');

class NativePlatformAdapter extends EventEmitter {

    constructor() {
        super();

        process.stdin.on('readable', () => {
            const chunk = process.stdin.read();
            if(chunk) {
                const commandArgsArray = String(chunk).split('\n');
                this.emit('command', commandArgsArray);
            }
        })
    }

    displayMessage(string) {
        process.stdout.write(`${string}\n`);
    }
}

module.exports = NativePlatformAdapter;