const { FireSQL } = require('firesql')
const { db } = require('./database')
const fireSQL = new FireSQL(db)
const operationMapper = (operation) => {
    return data = {
        date: new Date(operation.Date).toLocaleDateString(),
        input: operation.input,
        result: operation.result,
        operationName: operation.operation
    }
}

const getOperationData = async () => {

    const operations = await fireSQL.query
        (`
            SELECT *
            FROM Operations
            ORDER BY Date DESC
        `)

    let data = {
        'prime': [],
        'fibonacci': [],
        'gcd': [],
        'count': [],
        'quickSort': [],
        'sum': []
    }

    for (let operation of operations) {
        operation = operationMapper(operation)
        let operationName = (operation.operationName).toLowerCase()
        if (data.hasOwnProperty(operationName))
            data[operationName].push(operation)
    }

    return data
}

const openPageAfterDataLoaded = () => {
    getOperationData().then(result => {
        console.log(result)
        console.log("get data READY")
    })
    console.log("get data NOT READY")
}

openPageAfterDataLoaded()