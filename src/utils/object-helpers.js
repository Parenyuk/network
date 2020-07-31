

export const updateObjectInArray = (items, itemId, objPropName, obj) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u,  ...obj}
        }
        return u;
    })
}

