(function(root){
	var _ = function(obj) {
		if (! (this instanceof _) {
			return new _(obj);
		}
		this.wrap = obj;
	};

	/**
	 * 数组去重
	 * @param  {[type]} target [description]
	 * @return {[type]}        [description]
	 */
	_.uniq = function(target, callback) {
		var result = [];
		for (var i = 0; i < target.length; i++) {
			var computed = callback ? callback(target[i]) : target[i];
			if (result.indexOf(target[i]) === -1) {
				result.push(target[i]);
			};
		}
		return result;   // 结果。
	};

	/**
	 * 柯里化
	 * @param  {Function} fn [description]
	 * @return {[type]}      [description]
	 */
	_.restArgs = function(fn) {
		return function() {  // 支持柯里化
			var startLen = fn.length;
			var startIndex = startLen-1;
			var args = Array(startLen);  // [12, [123, 1234]]

			// rest  参数存储的内容。
			var rest = Array.prototype.slice.call(arguments, startIndex);
			for (var i = 0; i < startIndex; i++) {
				args[i] = arguments[i];
			}
			args[startIndex] = rest;
			return fn.apply(this, args);
		}
	};

	_.each = function(array, callback) {
		for (var i = 0; i < array.length; i++) {
			callback.call(array, array[i]);
		}

	}

	_.functions = function(obj) {
		var result = [];
		for(var key in obj) {
			result.push(key)
		}
		return result;
	}

	_.mixin = function(obj) {
		_.each(_.functions(obj), function(value) {
			var func = 
			_.prototype[value] = function() {

			}
		})
	}

	_.mixin(_);
	root._ = _;
})(this);