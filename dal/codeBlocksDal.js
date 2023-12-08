

const loopsSession = {
    title: "Loop Session - 0 to 10",
    code: `
    let i;
     _ (_ = _; _ < _; _) { 
        console.log(i);
     }
    `,
    solution: "let i; for (i = 0; i < 10; i++){ console.log(i); }",
}

const arraysSession = {
    title: "Array Session - Insert Element",
    code: `
    const insert_me = 3;
    const arr = [];
    arr.insert(_)
    `,
    solution: `
    const insert_me = 3;
    const arr = [];
    arr.insert(insert_me)
    `
}

const objectsSession = {
    title: "Object Session - Create Person",
    code: "{ _ : Shira, _ : Bahar, _ : 25, _ : Tel Aviv }",
    solution: "{ Name : Shira, FamilyName : Bahar, Age : 25, City : Tel Aviv }",
}

const printingSession = {
    title: "Printing Session - Print Hello World",
    code: "{ _ : Shira, _ : Bahar, _ : 25, _ : Tel Aviv }",
    solution: "{ Name : Shira, FamilyName : Bahar, Age : 25, City : Tel Aviv }",
}
const codeBlocks = [loopsSession, arraysSession, objectsSession, printingSession];


const {getDbInstance} = require("../services/db/connection");
const  find = async (params) => {
    const { collectionName, query, proj, options } = params;

    console.log(`proj is: ${JSON.stringify(proj)}`)
    console.log(`query is: ${JSON.stringify(query)}`)

    const dbInstance = getDbInstance();

    const collection = dbInstance.collection(collectionName)

    return await collection.find(query ?? {}, {projection: proj}).toArray()
}


const update = async (params) => {
    const { collectionName, query, update, options } = params;



    const dbInstance = getDbInstance();
    const collection = dbInstance.collection(collectionName)

    console.log(`going to update with params: ${JSON.stringify({query, update, options})}`)
    return await collection.updateOne(query, {$set: update}, options)
}

module.exports = {
    find,
    update
};
