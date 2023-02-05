module.exports = {
    keywords: ['model', 'task', 'thread', 'help', 'exit', 'limit', 'except', 'reward', 'loop', 'interval', 'cron', 'expand', 'custom', 'turn', 'endTime', 'send', 'work', 'msgNum', 'msgTotal', 'msgExcept', 'msgWork', 'count', 'proxy', 'timeout', 'skip', 'aid', 'hideCode', 'timer', 'delay', 'urlProxy', 'proxyUrl', 'proxyInterval', 'proxyProtocol', 'proxyVerify', 'proxyRetry'],
    userRegular: {
        'jd': /pin=([^;]+)/,
        'kejiwanjia': [/pin=([^;]+)/, /username=([^;]+)/],
        'baidu': /pin=([^;]+)/,
    },
    communal: ['options', 'curl', 'jsonParse', 'uuid', 'response', 'location', 'dumps', 'loads', 'match', 'matchAll', 'md5', 'unique', 'rand', 'random', 'compact', 'column', 'wait', 'query', 'sha1', 'md5', 'sha256', 'hmacsha256', 'query', 'haskey', 'type', 'parseIni', 'redisCli', 'fileCache', 'userAgents', 'userName', 'userPin', 'userDict', 'userRegular', 'urlProxy', 'proxyRow', 'proxyList', 'delay'],
    timerRegular: {
        jd: {
            wait: 120,
            rule:
                {
                    'url':
                        'https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5',
                    'haskey':
                        'currentTime2'
                }
        }
    },
    verifyUrl: 'https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5'
}
