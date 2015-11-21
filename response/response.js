exports.responder = function(req, res, objeto) {
    if (objeto) {
        res.json(objeto);
    } else {
        res.status(404);
        res.json(404, {
            message: "No encontrado",
            error: { status: 404}
        });
    }
};