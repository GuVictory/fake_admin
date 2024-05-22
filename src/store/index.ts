import { useQuery, QueryClient, useMutation } from '@tanstack/react-query';
import { TConfig, TConfigEdits, TEnv, TLocale, TPlatform } from '../types';
import { getConfig } from '../api';

export const queryClient = new QueryClient();

export function useConfig(locale: TLocale, platform: TPlatform, env: TEnv) {
    return useQuery({
        queryKey: ['config'],
        queryFn: async (): Promise<TConfig> => {
            return getConfig(locale, platform, env);
        },
    });
}

export function useConfigView() {
    return useQuery<TConfig>({
        queryKey: ['config'],
    });
}

export function useConfigDelete() {
    return useMutation({
        onMutate: ({
            type,
            id,
        }: {
            type: 'flags' | 'numbers' | 'objects' | 'ranges' | 'services' | 'texts';
            id: string;
        }) => {
            queryClient.setQueryData(['config'], (oldData: TConfig) => {
                const dataCopy = { ...oldData };
                const indexToDelete = dataCopy?.data?.[type].findIndex(
                    (item) => item.id === id
                );
                if (indexToDelete !== -1) {
                    dataCopy.data[type].splice(indexToDelete, 1);
                }

                return dataCopy;
            });

            queryClient.setQueryData(
                ['configEdits'],
                (oldData: TConfigEdits) => {
                    const dataCopy = { ...oldData };
                    dataCopy[type].push({
                        action: 'deleted',
                        id: id,
                    });

                    return dataCopy;
                }
            );
        },
    });
}

export function useConfigEdits() {
    return useQuery<TConfigEdits>({
        queryKey: ['configEdits'],
        initialData: {
            flags: [],
            objects: [],
            ranges: [],
            texts: [],
            numbers: [],
            services: [],
        },
    });
}
