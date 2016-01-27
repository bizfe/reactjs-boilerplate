exports.bind = function (php) {

    this.eventHandle.onOver = function (data) {
        data.isDebug = false && config.jserver.isDebug;
    }
};
