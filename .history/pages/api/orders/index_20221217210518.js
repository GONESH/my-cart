import { getSession } from 'next-auth/react'
import db from '../../../utils/db'

const handler = async (req, res) => {
    const session = await getSession({ req })
    if (!session) {
        return res.send(401).send('signin required');
    }

    const { user } = session;
    await db.connect();
    const newOrder = new Order({
        ...req.body,
        user: user._id,
    });
    const order = await newOrder.save();
    res.status(201).send(order);
}

export default handler;