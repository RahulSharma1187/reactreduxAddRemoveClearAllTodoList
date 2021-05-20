export const Add_ToDo = (data) => {
    return {
        type: "ADDTODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const Delete_ToDo = (id) => {
    return {
        type: "DELETETODO",
        id:id
    }
}

export const Remove_ToDo = () => {
    return {
        type: "REMOVETODO"
    }
}