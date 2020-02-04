module.exports = (formElement) => {
	
	// FormData
    const params = new FormData(formElement)

    // FormData -> Data
    let data = {}
    for(let pair of params.entries()) {
        let key = pair[0]
        let value = pair[1]
        if (key[key.length-2] === '[') {
            key = key.substr(0, key.length-2)
            if (data[key] === undefined) {
                data[key] = []
            }
            data[key].push(value)
        } else {
            data[key] = value
        }
    }

    return data
}
