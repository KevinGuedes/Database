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

    console.log(data)
}


getOperationData()


// const {
//     db,
// } = require('./database')
// const { FireSQL } = require('firesql')
// const fireSQL = new FireSQL(db)

// const primePromise = fireSQL.query
//     (`
//         SELECT *
//         FROM Operations
//         ORDER BY Date DESC
//     `)

// primePromise.then(operations => {
//     let prime = []
//     let fibonacci = []
//     operations.forEach(op => {
//         op.Date = new Date(op.Date)
//         if(op.operation == 'Prime')
//             prime.push(op)
//         else if(op.operation == 'Fibonacci')
//             fibonacci.push(op)
//     });

//     const operationData = {
//         layout: operation,
//         prime,
//         fibonacci,
//         gcd,
//         count,
//         quickSort,
//         sum
//     }

//     // res.render('operation', operationData)

// })

