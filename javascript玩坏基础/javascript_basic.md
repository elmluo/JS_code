#JS 对象
## JS String

```javascript
  str.charAt([index] position)                        string/""
  str.charCodeAt([index])                             unicode
  str.concat([String],[String],...)                   str[String][String]...
  str.match([RegExp|String])                          [string, index: number, input: str] 
  str.replace([RegExp|String] searchVal, [String|Function] replaceVal)              newStr
  str.search([RegExp/i] searchVal)                                      index
  str.slice([Number] start, [Number,optional] end)                      newStr
  str.split([*] seperator, [Number,optional] limit)                     Array
  str.substr([Number] start, [Number,optional] length)                  newStr
  str.substring([Number] start, [Number,optional] end)                  newStr
  str.indexOf([String] searchString)                                    index/-1  
  
```   

## JS Number

```javascript
  numObj = new Number()
  num.toString([Number,optional] radix)                             string
  num.toLocalString([String|String[], optional] )                   string
  num.toFixed([Number,optional] fractionalDigits)                   string
  num.toExponential([Number,optional] fractionalDigits)             string
  num.toPrecision([Number,optional] precision)                      string
  num.valueOf()                                                     Number
```

## JS Array

```javascript
  arr = new Array()/ [];
  arr.concat([T|Array.<T>, optional] items)       Array.<T>
  arr.join([String, optional] separator)          string
  arr.pop()                                       T, enditem
  arr.push([T, optional] items)                   Number
  arr.shift()                                     T, firstItem 
  arr.unshift([T, optional] items)                Nmuber                                             
  arr.slice([Number,optional] start, [Number, optional] end)        Array.<T>
  arr.splice([Number,optional] start, [Number, optional] end)       deletedArr
  arr.reverse()                                   Array.<T>
  arr.sort([Function, optional] compareFn)        Array.<T>
  arr.toString()                                  string
  arr.valueOf()                                   Array.<T>
  arr.indexOf([T] searchElement, [Number, optional] fromIndex)
  Array.isArray([*] obj)                          boolean
  arr.every([function(T=, number, Array.<T>)] callback, [*, optional] thisArg)              boolean
  arr.some([function(T=, number, Array.<T>)]) callback, [*, optional] thisArg)              boolean
  arr.filter([function(T=, number, Array.<T>)] callback, [*, optional] thisArg)             Array.<T>
  arr.forEach([function(T=, number, Array.<T>)] callback, [*, optional] thisArg)            void
  arr.map([function(T=, number, Array.<T>)] callback, [*,optional] thisArg)                 Array.<T>
  arr.reduce([function(*, *=, number, Array.<T>)] callback,[*,optional] initialValue)       *   
  arr.reduce([function(*, *=, number, Array.<T>)] callback,[*,optional] initialValue)       *
  
```
