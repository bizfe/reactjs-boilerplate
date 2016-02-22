exports.bind = function (php) {

    this.eventHandle.onOver = function (data) {
        data.isDebug = config.jserver.isDebug;
    }
};