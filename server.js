import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('messages.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware pour gérer les filtres sur des propriétés imbriquées
server.use((req, res, next) => {
    if (req.query['from.user.id']) {
        const userId = req.query['from.user.id'];
        const db = router.db.get('messages');
        const filtered = db.filter(msg => msg.from.user.id === userId).value();
        res.json(filtered);
    } else {
        next();
    }
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
