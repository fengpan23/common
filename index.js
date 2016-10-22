function Common(){

}

/**
 * 判断是否为空
 * 空：返回true
 * @param input
 * @return {boolean}
 */
Common.prototype.isNull = function(input){
    var flag = false;
    if(input==undefined||input==null||input.length==0)
        flag = true;
    return flag;
};

/**
 * 判断是否为数字
 * 是数字或者空：返回true
 * @param input
 * @return {boolean}
 */
Common.prototype.isNumber = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if(isNaN(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断是否是整数
 * 空或者整数：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isInteger = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if(!/^-?\d+$/.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断是否是浮点数
 * 是或者空：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isFloat = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if(!/^(-?\d+)(\.\d+)?$/.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断是否是IP地址
 * 空或者是IP地址：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isIP = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if(!/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断身份证号码
 * 空或者正确：true
 * @param idNumber
 * @return {boolean}
 */
Common.prototype.isIdCardNo = function(idNumber){
    var flag = true;
    if(!this.isNull(idNumber)){
        var factorArr = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1];
        var varArray = [];
        var lngProduct = 0;
        var intCheckDigit;

        if ((idNumber.length != 15) && (idNumber.length != 18)){
            return false;
        }
        for(let i = 0; i < idNumber.length; i++){
            varArray[i] = idNumber.charAt(i);
            if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)){
                return false;
            }else if (i < 17){
                varArray[i] = varArray[i] * factorArr[i];
            }
        }
        if (idNumber.length == 18){
            var date8 = idNumber.substring(6,14);
            if (this.isDate2(date8) == false){
                return false;
            }
            for(let i = 0; i < 17; i++){
                lngProduct = lngProduct + varArray[i];
            }
            intCheckDigit = 12 - lngProduct % 11;
            switch (intCheckDigit){
                case 10:
                    intCheckDigit = 'X';
                    break;
                case 11:
                    intCheckDigit = 0;
                    break;
                case 12:
                    intCheckDigit = 1;
                    break;
            }
            if (varArray[17].toUpperCase() != intCheckDigit){
                return false;
            }
        }else{
            var date6 = idNumber.substring(6,12);
            if (this.isDate2(date6) == false){
                flag = false;
            }
        }
    }
    return flag;
};

/**
 * 判断是否符合QQ号格式
 * 空或者QQ号：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isQQ = function (input){
    var flag = true;
    if(!this.isNull(input)){
        if(!/^[1-9]\d{4,10}$/.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断电话号码格式[101-****-*******]
 * 空或者符合格式：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isPhone = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if(!/^(0[1-9]\d{1,2}-)\d{7,8}(-\d{1,8})?/.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断是否是手机号码
 * 空或者手机号码：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isMobile = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if(!/^(13\d{9})|(15\d{9})|(18\d{9})|(0\d{10,11})$/.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断是否是邮编
 * 空或者邮编：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isPost = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if(!/^\d{1,6}$/.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断字符串长度是否在length范围内
 * 是或者空：true
 * @param input
 * @param length
 * @return {boolean}
 */
Common.prototype.isInRange = function(input,length){
    var flag = true;
    if(!this.isNull(input)){
        if(input.length<=length)
            flag = false;
    }
    return flag;
};

/**
 * 根据type的形式判断日期
 * 空或者符合形式：true
 * @param input
 * @param type
 * @return {boolean}
 */
Common.prototype.isDate = function(input,type){
    var flag = true;
    if(!this.isNull(input)){
        var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;
        if(!this.isNull(type)){
            if("YYYY/MM/DD"==type.toUpperCase())
                reg = /^((((1[6-9]|[2-9]\d)\d{2})\/(0?[13578]|1[02])\/(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})\/(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;
            else if("YYYYMMDD"==type.toUpperCase())
                reg = /^((((1[6-9]|[2-9]\d)\d{2})(0?[13578]|1[02])(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;
        }
        if(!reg.test(input)){
            flag = false;
        }
    }
    return flag;
};

Common.prototype.isDate2 = function(dateStr){
    var dateInfo = dateStr.match(/(\d{4})(\d{2})(\d{2})/);
    var tmpDate = new Date(dateInfo[1],dateInfo[2]-1,dateInfo[3]);
    return tmpDate.getFullYear()==dateInfo[1] && tmpDate.getMonth()+1==dateInfo[2] && tmpDate.getDate()==dateInfo[3];
};

/**
 * 判断是否是汉字
 * 空或者是汉字：true
 * @param input
 * @return {boolean}
 */
Common.prototype.isChinese = function(input){
    var flag = true;
    if(!this.isNull(input)){
        if (!(/^[\u4E00-\uFA29]*$/.test(input)&&(!/^[\uE7C7-\uE7F3]*$/.test(input))))
            flag = false;
    }
    return flag;
};

/**
 * 判断字符串含有 汉字和数字
 * @param input
 * @return {boolean}
 */
Common.prototype.isChineseOrNum = function(input){
    var flag = true;
    if(!this.isNull(input)){
        input = input.replace(/\d+/g,'');
        if (!(/^[\u4E00-\uFA29]*$/.test(input)&&(!/^[\uE7C7-\uE7F3]*$/.test(input))))
            flag = false;
    }
    return flag;
};

/**
 * 过滤掉字符串头和尾的空格,空了返回null
 * @param input
 * @return {*}
 */
Common.prototype.trimSpace = function(input){
    if(!this.isNull(input)){
        input.replace(/(^\s*)|(\s*$)/g, '');
    }
    return input;
};

/**
 * 过滤字符串左边空格
 * @param input
 * @return {*}
 */
Common.prototype.trimSpaceLeft = function(input){
    if(!this.isNull(input)){
        input.replace(/^\s*/g, '');
    }
    return input;
};

/**
 * 过滤字符串右边数据
 * @param input
 * @return {*}
 */
Common.prototype.trimSpaceRight = function(input){
    if(!this.isNull(input)){
        input.replace(/\s*$/, '');
    }
    return input;
};

/**
 * 判断是否是链接
 * 空或者链接，返回true
 * @param input
 * @return {boolean}
 */
Common.prototype.isUrl = function(input){
    var flag = true;
    if(!this.isNull(input)){
        var re = new RegExp("^((https|http|ftp|rtsp|mms)://)?[a-z0-9A-Z]{3}\.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z]\.com|net|cn|cc (:s[0-9]{1-4})?/$");
        if (!re.test(input))
            flag = false;
    }
    return flag;
};

/**
 * 判断是否是Email
 * 空或者是，返回true
 * @param input
 * @return {boolean}
 */
Common.prototype.isEmail = function(input) {
    var flag = true;
    if(!this.isNull(input)){
        input = input.substring(0,input.indexOf("@")).replace(".","").replace(".","")
                .replace(".","").replace(".","").replace(".","").replace(".","").replace(".","")
            +input.substring(input.indexOf("@"),input.length).replace("-","");

        var reg = /^\w{1,30}(?:@(?!-))(?:(?:[a-z0-9-]*(?:[a-z0-9](?!-))(?:\.(?!-))))+[a-z]{2,4}$/;
        if (!reg.test(input))
            flag = false;

    }
    return flag;
};

/**
 * @method      isnumeric      检验参数是否为字面数值
 *
 * @param       {*}             input       等待检验的值
 * @return      {boolean}                       返回{boolean}
 */
Common.prototype.isNumeric = function(input) {
    let whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    return (typeof input === 'number' || (typeof input === 'string' && whitespace.indexOf(input.slice(-1)) === -1)) && input !== '' && !isNaN(input);
}

/**
 * @method      count      计算对象或数组的可枚举成员数
 * @param       input       {object|array}                 要计算的对象或者数组
 * @return      {int}                               返回value的可枚举成员数
 */
Common.prototype.count = function(input){
    let result = 0;
    for (let i in input)
        result++;
    return result;
};

Common.prototype.first = function(input){
    if (input && typeof(input) === 'object') {
        for (let key in input) return {key: key, value: input[key]};
    } else
        return false;
};

/**
 * @method      toString      转换成字符串
 *
 * @param       {*}       input       等待转换的值
 * @return      {string}              当参数为对象且有message成员时返回该成员，当参数为undefined时返回''，其他的调用自身toString方法
 */
Common.prototype.toString = function(input) {
    let str = '';
    switch (typeof(input)) {
        case 'object':
            if (input !== null)
                str = (input instanceof Object && input.message) ? input.message : input.toString();
            break;
        case 'undefined':
            break;
        default:
            str = input.toString();
    }
    return str;
}

Common.prototype.range = function(start, end, step) {
    let range = [],
        typeofStart = typeof start,
        typeofEnd = typeof end;
    if (step <= 0)
        step = 1;
    if (typeofStart === "undefined" || typeofEnd === "undefined")
        return false;
    else if (typeofStart !== typeofEnd)
        return false;
    typeof step == "undefined" && (step = 1);
    if (end < start)
        step = -step;
    if (typeofStart == "number")
        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
    else if (typeofStart == "string") {
        if (start.length != 1 || end.length != 1)
            return false;
        start = start.charCodeAt(0);
        end = end.charCodeAt(0);
        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }
    } else
        return false;
    return range;
};


/**
 * @method      typeOf      明确诊断参数的具体类型
 * @param       {*}             data           等待体检的值
 * @return      {string}                       返回类型的简单描述
 */
function typeOf(data) {
    if (typeof (data) === 'object') {
        switch (Object.prototype.toString.call(data)) {
            case '[object Null]':
                return 'null';
            case '[object Object]':
                return 'object';
            case '[object Array]':
                return 'array';
            case '[object Map]':
                return 'map';
            case '[object Set]':
                return 'set';
            case '[object WeakMap]':
                return 'WeakMap';
            case '[object WeakSet]':
                return 'WeakSet';
        }
    } else {
        return typeof (data);
    }
}

function Action(){
}
/**
 * @method      invokeCallback      调用函数（参数各自传入）
 * @param       arguments 0     {function}              当第一个参数是{function}时, 调用该函数，绑定对象为null
 * @param       arguments 1     {function}              当第二个参数是{function}时,  调用该函数，绑定对象为arguments[0]
 * @param       {...*}          arguments[...]          剩余参数作为函数调用参数传入
 * @return      {boolean}                               是否调用成功
 * */
Action.prototype.invokeCallback = function () {
    if (arguments.length > 0) {
        if (typeof(arguments[0]) === 'function') {
            arguments[0].apply(null, Array.prototype.slice.call(arguments, 1));
            return true;
        } else if (typeof arguments[1] === 'function') {
            arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2));
            return true;
        }
    }
    return false;
};

/**
 * @method      invokeApply      调用函数（参数作为数组传入）
 *
 * 当第一个参数是{function}时：
 * @param       {function}      arguments[0]        调用该函数，绑定对象为null
 * @param       {array}         arguments[1]        数组内元素作为函数调用参数传入
 * @return      {boolean}                           是否调用成功
 * 否则当第二个参数是{function}时：
 * @param       {object}        arguments[0]        函数调用时的绑定对象
 * @param       {function}      arguments[1]        调用该函数，绑定对象为arguments[0]
 * @param       {array}         arguments[2]        数组内元素作为函数调用参数传入
 * @return      {boolean}                           是否调用成功
 *
 * */
Action.prototype.invokeApply = function() {
    if (arguments.length > 0) {
        if (typeof(arguments[0]) === 'function') {
            let arg = Array.prototype.slice.call(arguments[1], 0);
            if (Array.isArray(arg))
                arguments[0].apply(null, arg);
        } else if (typeof arguments[1] === 'function') {
            let arg = Array.prototype.slice.call(arguments[2], 0);
            if (Array.isArray(arg))
                arguments[1].apply(arguments[0], arg);
        }
    }
};

/**
 * @method      toMap      将{object}转换为{map}
 *
 * @param       {object}      obj     要转换的对象
 * @return      {map|*}               参数为对象时返回转换成功的{map},否则返回参数
 * */
Action.prototype.toMap = function(obj) {
    if (typeOf(obj) === 'object') {
        let map = new Map();
        for (let k of Object.keys(obj))
            map.set(k, obj[k]);
        return map;
    } else {
        return obj;
    }
};

Action.prototype.toObj = function(map) {
    if (typeOf(map) === 'map') {
        let obj = Object.create(null);
        for (let item of map.entries()) {
            obj[item[0]] = item[1];
        }
        return obj;
    } else {
        return map;
    }
};

module.exports =  new Common();