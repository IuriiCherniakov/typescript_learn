function strip (x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyRespose {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error result'
}

function handle (res: MyError | MyError) {
    if (res instanceof MyRespose) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}
//==============================================

type AlertTYpe = 'succes' | 'danger' | 'warning'
function setAlertType (type: AlertTYpe){
    //...............
}
setAlertType("succes")
setAlertType("warning")
// setAlertType('default')




















