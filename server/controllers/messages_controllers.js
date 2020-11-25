let messages = []
let id = 0

module.exports = {
    createMessage: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },

    readMessage: (req, res) => {
        res.status(200).send(messages)
    },

    updateMessage: (req, res) => {
        const {text} = req.body
        const {id} = req.params

        const index = messages.findIndex(element => element.id === +id)

        if(index === -1){
            return res.status(404).send('User is not there')
        }

        const message = messages[index]

        messages[index] = {
            id: message.id,
            text: text || message.text,
            time: message.time,
        }

        res.status(200).send(messages)
    },

    deleteMessage: (req, res) => {
        const {id} = req.params

        const index = messages.findIndex(element => element.id === +id)

        if(index === -1){
            return res.status(404).send('User is not there')
        }

        messages.splice(index, 1)

        res.status(200).send(messages)
    }


}