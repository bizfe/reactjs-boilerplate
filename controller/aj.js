function aj() {
    return this;
}
var controlFns = {
    activity: function(param) {
        var me = this;
        setTimeout(function() {
            me.res.write(JSON.stringify({code: 0, message: 'hello reactjs, I am from server !!!'}));
            me.res.end();
        }, 1000)
    }
}
exports.__create = controller.__create(aj, controlFns);
