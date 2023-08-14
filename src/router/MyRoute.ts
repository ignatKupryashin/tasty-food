import React, {ReactNode} from "react";

class MyRoute {
    path: string;
    element: ReactNode;

    constructor(path: string, element: React.FC) {
        this.path = path;
        this.element = element({});
    }
}

export default MyRoute;


