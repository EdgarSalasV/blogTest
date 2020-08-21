const setCapitalize = ([...str]) => {
    return str.shift().toUpperCase() + str.join('')
}

export default setCapitalize