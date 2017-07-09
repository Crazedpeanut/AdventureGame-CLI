class AdventureGame {
    constructor(platformAdapter) {
        this._platformAdapter = platformAdapter;
    }

    init() {
        this._platformAdapter.displayMessage(
            'Welcome to Adventure Game'
        );

        //this._connection = io(config.server.url);
    }
}

module.exports = AdventureGame;