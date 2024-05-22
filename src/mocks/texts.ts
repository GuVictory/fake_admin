import { TText } from '../types';

export const texts: TText[] = [
    {
        id: 'casePaidRefund',
        description:
            'Voluptate aliquip consequat consequat labore id minim nisi irure aliquip.',
        edited: new Date().toISOString(),
        value: 'При отказе от товара обратная доставка на склад может быть платной.',
        versions: []
    },
    {
        id: 'cvcHintText',
        description:
            'Voluptate aliquip consequat consequat labore id minim nisi irure aliquip.',
        edited: new Date().toISOString(),
        value: 'Введите 3 символа с обратной стороны карты',
        versions: []
    },
    {
        id: 'operatorConnectText',
        description:
            'Voluptate aliquip consequat consequat labore id minim nisi irure aliquip.',
        edited: new Date().toISOString(),
        value: 'Оператор скоро подключится и поможет вам',
        versions: [
            {
                fromVersion: '610000',
                value: 'Оператор скоро подключится и все же поможет вам',
            },
            {
                fromVersion: '602000',
                value: 'Оператор скоро подключится и не поможет вам',
            }
        ]
    },
];
