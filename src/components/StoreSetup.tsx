import React from "react";
import { useConfig, useConfigEdits } from "../store";

export const StoreSetup = () => {
    useConfigEdits();
    useConfig('RU', 'Android', 'STAG');

    return null;
}