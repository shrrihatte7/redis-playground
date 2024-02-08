const client = require("./client");

const init = async ()=>{
    const setMsg = await client.set("msg:1","hello how are you","nx");
    console.log(setMsg);
    await client.expire("msg:1","10");
    const result = await client.get("msg:1");
    console.log("Result -->",result);
};

init();