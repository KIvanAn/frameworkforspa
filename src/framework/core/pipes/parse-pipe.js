export function parsePipe(key) {
    const pipe = key.split('|')[1].trim()

    if (!hasParams(pipe)) return {name: pipe}

    const pipeData = pipe.split(':')

    return {
        name: pipeData[0],
        args: pipeData.slice(1)
    }
}

function hasParams(pipe) {
    return pipe.includes(':')
}
