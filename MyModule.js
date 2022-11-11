class MyModule{
    user_name = "";

    constructor(user_name){
        this.user_name = user_name;
    }

    getMessage(){
        return `Hello, ${this.user_name}`;
    }
}

module.exports.MyModule = MyModule;