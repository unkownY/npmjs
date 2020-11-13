/**
 * check permission
 * @param {Object} object 权限对应关系 e.g: {api:[permission]}
 * @param {String} name 权限参数名称
 */
const auth = (object={},name='permission') => (req, res, next) => {
    let perStr = '';

    if(Array.isArray(req.user[name])) perStr = req.user[name].join(',');

    let flag = false;

    for(let o of object[req.path]){
        if(!perStr.includes(o)) continue;

        flag = true;
        break;
    }
    if(flag) return next();

    let err = new Error('Permission Denied.');
    err.status = 401;
    next(err);
};

module.exports = auth;