const proxy = [
    {
        context:'/api',
        target: 'http://localhost:3100'
        //pathRewrite:{'^/api':''}
    }
];
module.exports = proxy;