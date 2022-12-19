// /api/orders/:id

import { getSession } from 'next-auth'

const handler = async (res, req) => {
    const session = await getSession({ req });
    if (!session) {
        return res.status(401).send('Singnin Required')
    }
    await db.connect();
    const order = await Order.findById(req.query.id);
    await db.disconnect();
    res.send(order);
}

export default handler;