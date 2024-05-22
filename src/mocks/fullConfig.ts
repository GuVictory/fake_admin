import { TConfigData } from "../types";
import { bools } from "./bools";
import { numbers } from "./numbers";
import { objects } from "./objects";
import { ranges } from "./ranges";
import { services } from "./services";
import { texts } from "./texts";

export const configMockData: TConfigData = {
    flags: bools,
    texts: texts,
    services: services,
    numbers: numbers,
    objects: objects,
    ranges: ranges,
}