const { FireSQL } = require('firesql')
const { db } = require('./database')
const fireSQL = new FireSQL(db)

const getOperationData = async (operationName) => {

    try {
        const operationPromise = fireSQL.query
            (`
                SELECT *
                FROM Operations
                WHERE operation = '${operationName}'
                ORDER BY Date DESC
            `)

        return await operationPromise.then(operations => {

            let operationData = []

            for (let operation of operations) {
                operationData.push({
                    date: new Date(operation.Date).toLocaleDateString(),
                    input: operation.input,
                    result: operation.result,
                    operation: operation.operation
                })
            }

            return operationData

        })

    }
    catch (e) {
        console.log(e)
    }

}


getOperationData('Prime').then(result => {
    console.log(result)
})





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

