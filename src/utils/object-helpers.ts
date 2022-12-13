export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    return items.map((user: any) => {
    if (user[objPropName] === itemId) {
        return {...user, ...newObjProps}
    }
    return user;
})
}

export const outputDateSeconds = () => {
    const date = new Date()
    let output = String(
        date.getHours()
        + ':' + date.getMinutes()
        + ':' + date.getSeconds()
        + ':' + date.getMilliseconds()
    )
    output = output + ''
    return output
}