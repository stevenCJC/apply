(function(){

    function apply(func, args, context){
        switch (args.length){
            case 0:
                return context?func.call(context):func();
                break;
            case 1:
                return context?func.call(context, args[0]):func(args[0]);
                break;
            case 2:
                return context?func.call(context, args[0], args[1]):func(args[0], args[1]);
                break;
            case 3:
                return context?func.call(context, args[0], args[1], args[2]):func(args[0], args[1], args[2]);
                break;
            case 4:
                return context?func.call(context, args[0], args[1], args[2], args[3]):func(args[0], args[1], args[2], args[3]);
                break;
            case 5:
                return context?func.call(context, args[0], args[1], args[2], args[3], args[4]):func(args[0], args[1], args[2], args[3], args[4]);
                break;
            default:
                return func.apply(context||this,args);
        }
    }

    if (typeof module === 'object' && module.exports) {
        module.exports = apply
    }
    else if (typeof define === 'function' && define.amd) {
        define(function () { return apply })
    }
    else if (typeof window !== undefined) {
        return window.apply = apply
    }

})();
