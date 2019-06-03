var buildUser = function (userDate) {
    //使用User构造函数创建新的用户对象
    var user = new User(userDate.name);
    userDate.sessions.forEach(function (sessions) {
        //为user对象添加每次锻炼
        user.addSessions(sessions.userDate, sessions.duration); 
    });
    //返回新创建的用户模型
    return user;
};

//创建JavaScript对象以保存用户数据
var userDate = {
    "name": "黄河",
    "sessions": [
        {"sessionDate":"2017-02-05", "duration": 120},
        {"sessionDate":"2017-02-06", "duration": 35},
        {"sessionDate":"2017-02-07", "duration": 45}
    ]
};
//调用函数从数据创建模型
var user = buildUser(userDate);
//添加一次锻炼并记录返回的总时间
console.log(user.addSessions("2017-02-06",40));
    

