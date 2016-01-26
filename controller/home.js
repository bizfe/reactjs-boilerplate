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
            data.moduleName = 'home.index'; //模块名
            data.jsDefault = ['app/bundle']; //默认的JS文件
            mSelf.render('react.html', data);
        });
    }
};

exports.__create = controller.__create(home, controlFns);
