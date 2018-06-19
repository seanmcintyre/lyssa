
import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import mediaQuery from '../globals/js/style-helpers/mediaQuery';
//@ts-ignore
import ChevronRight from '../icons/chevron-right.svg';
import { ParagraphMd } from '../Type';
import COLORS from '../globals/js/constants/COLORS';

export interface BreadcrumbProps {
    /**
     * An aray of BreadcrumbLink or BreadcrumbLinkReactRouter components
     */
    crumbs?: Array<React.ReactNode>,
    /**
     * A string describing the current page title
     */
    currentPageLabel: string;
    /**
     * Set the current color theme, must also be set on the BreadcrumbLink or BreadcrumbLinkReactRouter
     */
    format: 'lightTheme' | 'darkTheme';
    /**
     * suppress bottom margin if true
     */
    noMargin?: boolean;
};

const BreadCrumbSetWrapper = styled.div `width: 100%;`;

const ArrowIconWidth = 24;
export const ARROWLEFT_CLASSNAME = 'BreadcrumbLink_ArrowLeft';

const truncatewithEllipsisCSS = css`
    display: inline-block;
    overflow: hidden;

    position: relative;

    width: auto;
    max-width: 100%;

    white-space: nowrap;
    text-overflow: ellipsis;
`;

interface CrumbWrapperProps extends React.HTMLProps<HTMLDivElement>{
    format: 'lightTheme' | 'darkTheme';
    showOnSmall?: boolean;
}

const CrumbWrapper = styled<CrumbWrapperProps,'div'>('div')`
    color: ${props => props.format === 'darkTheme' ? COLORS.IronHeart : COLORS.AstroGranite}
    display: ${props => props.showOnSmall ? 'inline-block' : 'none'};

    position: relative;

    ${mediaQuery.md`
        display: inline-block;
        padding-right: ${rem(ArrowIconWidth)};
    `}

    ${props => props.showOnSmall ? css`
        .${ARROWLEFT_CLASSNAME} {
            display: inline-block;
            padding-right: ${rem(8)};
            ${mediaQuery.md`
                display: none;
            `}
        }
    ` : ''}
`;

const CrumbLabel = styled(ParagraphMd)`
    ${truncatewithEllipsisCSS}
`;

const CrumbArrowIcon = styled(ChevronRight)`
    position: absolute;
    top: ${rem(-2)};

    width: ${rem(ArrowIconWidth)};
    height: ${rem(ArrowIconWidth)};
    display: none;
    right: 0;

    * {
        fill: currentColor;
    }

    ${mediaQuery.md`
        display: inline-block;
    `}
`;

const CurrentPageCrumb = styled(ParagraphMd)`
    ${truncatewithEllipsisCSS}
    width: calc(50%);
    ${mediaQuery.md`
        width: calc(33%);
    `}
`;

const Breadcrumb = ({
    crumbs,
    currentPageLabel,
    format="lightTheme",
    noMargin,
    ...filteredProps
}: BreadcrumbProps) => {

    const crumbWidth = crumbs ? `${100 / (crumbs.length + 1)}%` : '100%';

    const CrumbList = crumbs.map(function(crumb, i) {

        return (
                <CrumbWrapper
                    showOnSmall={i === crumbs.length - 1}
                    format={format}
                    key={`crumb-${i}`}
                    style={{ 'maxWidth': crumbWidth }}
                >
                    <CrumbLabel
                        element="span"
                        format={format === 'darkTheme' ? 'light' : 'dark'}
                        noMargin={noMargin}
                    >
                        {crumb}
                    </CrumbLabel>
                    <CrumbArrowIcon />
                </CrumbWrapper>
        );
    });

    return (
        <BreadCrumbSetWrapper
            {...filteredProps}
        >
            {crumbs && CrumbList}

            <CurrentPageCrumb
                element="span"
                format={format === 'darkTheme' ? 'light' : 'dark'}
                noMargin={noMargin}
                style={{ 'maxWidth': crumbWidth }}
            >
                {currentPageLabel}
            </CurrentPageCrumb>
        </BreadCrumbSetWrapper>
    );
};

export default Breadcrumb;