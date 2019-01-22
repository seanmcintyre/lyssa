// @flow
import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Button } from '../Button/Button';
import ChevronDown from '../Icons/chevron-down.svg';
import { MenuPanel } from '../MenuPanel/MenuPanel';
import { ButtonIconElement } from '../Button/ButtonIconElement';
import {
    ButtonCoreCSS,
    getDefaultCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,
} from '../Button/ButtonHelpers';
import { ButtonProps } from '../Button/ButtonProps';
import { ButtonStyleSettings } from '../Button/ButtonStyleSettings';
import { Omit } from '../Utils/Omit';

const menuButtonWidths = {
    sm: 28,
    md: 30,
    lg: 38,
};

const buttonBackgrounds = {
    alternative: ButtonStyleSettings.Formats.alternative.hover.backgroundColor,
    lightTransparent: 'rgba(255,255,255,0.5)',
    primary: ButtonStyleSettings.Formats.primary.hover.backgroundColor,
    secondary: ButtonStyleSettings.Formats.secondary.hover.backgroundColor,
};

interface ButtonStylingProps
    extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    size: 'sm' | 'md' | 'lg';
    format?: 'primary' | 'secondary' | 'alternative' | 'lightTransparent';
}

const activeAnimation = css`
    * {
        transition: transform 150ms ease;
    }

    &:active {
        transform: scale(1);

        * {
            transform: scale(0.95);
        }
    }
`;

const WrapperStyled = styled<ButtonStylingProps, 'div'>('div')`
    position: relative;

    //:after pseudo-element is the visual dividing line between buttons
    &::after {
        position: absolute;
        top: 50%;
        right: ${props => rem(menuButtonWidths[props.size]) || 0};
        transform: translateY(-50%);
        content: '';
        width: ${rem(1)};
        height: calc(100% - 1rem);
        background-color: ${props =>
            buttonBackgrounds[props.format] || buttonBackgrounds.primary};
    }

    &:hover::after {
        background-color: rgba(0, 0, 0, 0);
    }
`;

const MainButtonStyled = styled<ButtonProps, any>(Button)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 0;
    border-right-width: 0;
    width: calc(100% - ${props => rem(menuButtonWidths[props.size]) || 0});
    ${activeAnimation};
`;

const MenuButtonWrapperStyled = styled('div')`
    display: inline-flex;
    margin-bottom: ${rem(
        -1,
    )}; // fixes bug where menu button falls out of alignment with main button
`;

const MenuButtonStyled = styled<ButtonStylingProps, 'button'>('button')`
    ${ButtonCoreCSS}
    ${getDefaultCSSByFormat}

    ${getSizeCSS}

    &:hover {
        cursor: pointer;
        ${getHoverCSSByFormat}
    }
    border-radius: ${rem(3)};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    border-left-width: 0;
    min-width: 0;
    padding-left: 0;
    padding-right: 0;
    width: ${props => rem(menuButtonWidths[props.size]) || 0};

    ${activeAnimation}
`;

export interface ButtonSplitMenuProps {
    /**
     * Text of button
     */
    buttonLabel: string;
    /**
     * Color Format (See Button Component)
     */
    format?: 'primary' | 'secondary' | 'alternative' | 'lightTransparent';
    /**
     * Translated string describing menu button action
     */
    menuButtonA11yLabel: string;
    /**
     * onClick callback for the menu button
     */
    menuButtonOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Menu Direction (see MenuPanel)
     */
    menuAlignment?: 'left' | 'right' | 'center';
    /**
     * Content of MenuPanel
     */
    menuContent: React.ReactNode;
    /**
     * Object of any additional props to send to MenuPanel
     */
    menuProps?: {};
    /**
     * Menu Size (see MenuPanel)
     */
    menuSize: 'sm' | 'md' | 'lg';
    /**
     * regular on click event passes to "main" button.
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Button Size
     */
    size?: 'sm' | 'md' | 'lg';
}

export const ButtonSplitMenu: SFC<
    ButtonSplitMenuProps & Omit<React.HTMLProps<HTMLElement>, 'size'>
> = ({
    buttonLabel,
    format = 'primary',
    menuButtonA11yLabel,
    menuButtonOnClick,
    menuAlignment = 'right',
    menuContent,
    menuProps,
    menuSize,
    size = 'md',
    ref: _,
    ...props
}) => {
    return (
        <WrapperStyled size={size} format={format}>
            <MainButtonStyled {...props} format={format} size={size} isInline>
                {buttonLabel}
            </MainButtonStyled>
            <MenuButtonWrapperStyled>
                <MenuPanel
                    alignment={menuAlignment}
                    menuContent={menuContent}
                    size={menuSize}
                    {...menuProps}
                >
                    <MenuButtonStyled
                        size={size}
                        format={format}
                        onClick={menuButtonOnClick}
                    >
                        <ButtonIconElement size={size}>
                            <ChevronDown title={menuButtonA11yLabel} />
                        </ButtonIconElement>
                    </MenuButtonStyled>
                </MenuPanel>
            </MenuButtonWrapperStyled>
        </WrapperStyled>
    );
};
