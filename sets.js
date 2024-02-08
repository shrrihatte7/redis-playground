const client = require("./client");

const init = async()=>{
    // const addSet = await client.sadd("messages","1");
    // const addSet2 = await client.sadd("messages","2");
    // const addSet3 = await client.sadd("messages","3");
    //  await client.srem("messages","3");
    const exist = await client.sismember("messages","2");
    console.log(exist);
    // console.log(addSet2);
    // console.log(addSet3);
};

init();