import React from 'react';
import {TouchableWithoutFeedbackProps} from 'react-native';

import {I18nKeys} from '@assets/i18n/locales';
import {ImagesTypes} from '@assets/images';

export type ButtonProps = RequireAtLeastOne<
  {
    /**
     * Button size
     * @default normal
     */
    size?: 'normal' | 'small' | 'extraSmall';

    /**
     * Children for button
     * @default undefined
     */
    children?: React.ReactNode;

    /**
     * Left Icon
     */
    leftIcon?: ImagesTypes;

    /**
     * Right Icon
     */
    rightIcon?: ImagesTypes;

    /**
     * Disable button when press
     */
    throttleMs?: number;

    text: string;

    t18n: I18nKeys;
  },
  't18n' | 'text'
> &
  TouchableWithoutFeedbackProps;
