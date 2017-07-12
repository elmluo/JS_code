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
  num.toFixed([Number,optional] fractionalDigits, optional)         string
  num.toExponential([Number,optional] fractionalDigits ,optional)   string
  num.toPrecision([Number,optional] precision, optional)            string
  num.valueOf()                                                     Number
```
