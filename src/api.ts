import axios from 'axios';
import { TConfig, TEnv, TLocale, TPlatform } from './types';
import { configMockData } from './mocks/fullConfig';

export const getConfig = async (
    locale: TLocale,
    platform: TPlatform,
    env: TEnv
): Promise<TConfig> => {
    console.info(
        'Запрос за ' +
            env +
            ' конфигом для локали ' +
            locale +
            ' и платформы ' +
            platform
    );

    if (import.meta.env.PROD) {
        const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        return data as TConfig;
    } else {
        return {
            data: configMockData,
            version: 'someSuperVersionHash',
            locale: locale,
            platform: platform,
            env: env,
        };
    }
};
