export const addChannel = () => {
    let object = {
        mode: 'PAL',
        quality: 1,
        resolution: 'QCIF',
        frame: 1,
        duration: 0
    }
    return {
        type: 'ADD_CHANNEL',
        payload: object
    }
}