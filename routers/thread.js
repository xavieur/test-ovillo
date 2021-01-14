const express = require('express')
const router = new express.Router()
const Thread = require('../models/thread')

router.post('/threads', async (req, res) => {
    const thread = new Thread(req.body)

    try {
        await thread.save()
        res.status(201).send(thread)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/threads', async (req, res) => {
    try {
        const threads = await Thread.find({})
        res.send(threads)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/threads/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const thread = await Thread.findById(_id)

        if (!thread) {
            return res.status(404).send()
        }

        res.send(thread)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/threads/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'body']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const thread = await Thread.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!thread) {
            return res.status(404).send()
        }

        res.send(thread)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/threads/:id', async (req, res) => {
    try {
        const thread = await Thread.findByIdAndDelete(req.params.id)

        if (!thread) {
            res.status(404).send()
        }

        res.send(thread)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router