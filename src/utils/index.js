export function isUrl(url){
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    let regex = new RegExp(expression)
    return url.match(regex)
}

export function assignValueToArrayWithLimit(array, key, limit){
    let countLimit = Math.ceil(array.length / limit)
    let count = 1
    let position = 1
    return array.map(item => {
        if (count > countLimit){
            count = 1
            position += 1
        }
        item[key] = position
        count += 1
        return item
    })
}