import express from 'express';
import { fetchAllMessages, addMessage, updateMessage, deleteMessage } from '../db/messages.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const messages = await fetchAllMessages();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error getting messages' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { username, message } = req.body;
        const newMessage = await addMessage(username, message);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error adding message' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { message } = req.body;
        const updatedMessage = await updateMessage(id, { message });
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error updating message' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteMessage(id);
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting message' });
    }
});

export default router;