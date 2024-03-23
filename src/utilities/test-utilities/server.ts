import {setupServer} from "msw/node";
import {DefaultBodyType, PathParams, ResponseComposition, rest, RestContext, RestRequest} from "msw";

interface ICreateServer {
    path: string;
    res: (req: RestRequest<never, PathParams>, res: ResponseComposition<DefaultBodyType>, ctx: RestContext) => any; // eslint-disable-line
}

export function createServer(handleConfig: ICreateServer[]) {
    const handlers = handleConfig.map((config: ICreateServer) => {
        return rest.get(config.path, (req: RestRequest<never, PathParams>, res: ResponseComposition<DefaultBodyType>, ctx: RestContext) => {
            return res(
                ctx.json(
                    config.res(req, res, ctx)
                ))
        })
    });

    const server = setupServer(...handlers);

    beforeAll(() => {
        server.listen();
    })

    afterEach(() => {
        server.resetHandlers();
    })

    afterAll(() => {
        server.close();
    })
}
