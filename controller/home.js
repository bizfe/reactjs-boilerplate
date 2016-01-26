function home() {
    return this;
}
var controlFns = {
    'index': function(args) {
        var php = {};
        var mSelf = this;
        this.bindDefault(php);
        this.bridgeMuch(php);
        this.listenOver(function(data) {
            mSelf.render('react.html', data);
        });
    }
};

exports.__create = controller.__create(home, controlFns);
