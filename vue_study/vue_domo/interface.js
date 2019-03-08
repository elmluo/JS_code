// Constructor
var Interface = function(name, methods){
	// 参数个数判断
	if (arguments.length != 2) {
		throw new Error("Interface constructor  called width" + arguments.length + "arguments, but expectly 2")
	}
	this.name = name;
	this.methods = [];
	for (var i = methods.length - 1; i >= 0; i--) {
		if (typeof methods[i] !== 'string') {
			throw new Error("Interface constructor expects method name to be passed in as a string");
		}
		this.methods.push(methods[i]);
	}
};


// Static class method.
// ob
Interface.ensureImplements = function (obj) {
	// 传入的实参个数进行判断
	if (arguments.length < 2) {
		throw new Error("方法获取实参长度是" + argument.length +", 但是最少是两个")
	}

	// 
	for(var i = 1, len=arguments.lenght; i<len; i++0){
		// 获取传入的接口
		var interface = arguments[i];
		if (interface.costructor !== Interface) {
			throw new Error("方法期望获取的参数是Interface辅助类的实例")
		}
		for ( var j = 0, methodsLen = interface.methods.length; j<method; j++) {
			var method = interface.methods[j];
			if (!obj[method] || typeof obj[method] !== 'function'){
				throw new Error("方法抛出：对象没有应用"+ interface.name + "接口定义" + method )
			}
		}
	}
}