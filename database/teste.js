
const print= (x) => {
    console.log(x)
}

data = {
    'prime': [
        {
            'x':1,
            'teste': "olá mundo"
        },
        {
            'x':2
        }
    ],
    'fibonacci': [
        {
            'x':3
        },
        {
            'x':4
        }
    ]

}
//in objeto
//of array
for(let key in data){

    for(let info of data[key]){
        print(info)
    }
}

// Object.entries(data).forEach(([key, value]) => {
//     value.forEach(item => {
//         console.log(item)
//     })
// });


Object.entries(data).forEach(([key, value]) => {
    print(key)
    value.forEach(item => {
        console.log(item)
    })
});