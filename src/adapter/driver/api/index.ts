import { server } from "adapter/driver/api/server";
import { serverConfig } from "../../../config";

server.listen(serverConfig.port, () =>
    console.log(
        `${serverConfig.env} - Server running on port: ${serverConfig.port}`,
    ),
);