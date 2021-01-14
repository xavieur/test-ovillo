const express = require('express')
const router = new express.Router()
const Reply = require('../models/reply')
const Thread = require('../models/thread')

router.post('/replys', async (req, res) => {
    const reply = new Reply(req.body)

    try {
        await reply.save()
        res.status(201).send(reply)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/replys', async (req, res) => {
    try {
        const replys = await Reply.find({})
        res.send(replys)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/replys/thread/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const thread = await Thread.findById(_id)

        if (!thread) {
            return res.status(404).send()
        }
        
        await thread.populate('replys').execPopulate()

        res.send(thread.replys)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/replys/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const reply = await Reply.findById(_id)

        if (!reply) {
            return res.status(404).send()
        }

        res.send(reply)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/replys/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'body']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const reply = await Reply.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!reply) {
            return res.status(404).send()
        }

        res.send(reply)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/replys/:id', async (req, res) => {
    try {
        const reply = await Reply.findByIdAndDelete(req.params.id)

        if (!reply) {
            res.status(404).send()
        }

        res.send(reply)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router