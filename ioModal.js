//定义用户构造函数
//添加用户数据
var User = function (name) {
    //声明私有变量
    var sessions = [];
    var totalDuration = 0;

    this.addSessions = function (sessionDate, duration) {
        sessions.push({
            "sessionDate":sessionDate, 
            "duration":duration
        });
        //将当前锻炼你时间累加到总计时间
        totalDuration += duration;
        return totalDuration;
    }
    //定义函数，检索用户数据（获取用户数据）
    this.getData = function () {
        return {
            "name":name,
            "total":totalDuration,
            //使用slice（）构造数组副本
            "sessions":sessions.slice()
        }
    }
};

