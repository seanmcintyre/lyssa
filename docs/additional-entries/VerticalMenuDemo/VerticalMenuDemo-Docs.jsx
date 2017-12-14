import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { Header3, Header4, ParagraphMd } from '../../../src/Type';
import { Grid, GridCol, GridBlock } from '../../../src/Grid';
import VerticalMenuNested from '../../../src/VerticalMenuNested/VerticalMenuNested';
import VerticalMenuContextualMenuPanel from '../../../src/VerticalMenuContextualMenuPanel/VerticalMenuContextualMenuPanel';
import VerticalMenuItem from '../../../src/VerticalMenuItem/VerticalMenuItem';
import VerticalMenuItemContent from '../../../src/VerticalMenuItemContent';
import MenuPanelList from '../../../src/MenuPanelList/MenuPanelList';
import HomeIcon from '../../../src/icons/home.svg';
import HomeFilledIcon from '../../../src/icons/home-filled.svg';
import PopOutIcon from '../../../src/icons/pop-out.svg';
import SettingsIcon from '../../../src/icons/gear.svg';
import styles from './VerticalMenuDemo-Docs.scss';

class VerticalMenuDemoDocs extends React.Component {
    render() {

        const onClickHandler = (e) => {
            e.preventDefault();
            console.log('Demo Click Handler: You Clicked:', e.target);
        };

        const subMenuItems = [
            (
            <VerticalMenuItem>
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            label="Nested Item 1"
                        />
                    </a>
                </VerticalMenuItem>
            ),
    
            (
            <VerticalMenuItem
            >
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            isActive
                            label="Nested Item 2"
                        />
                    </a>
                </VerticalMenuItem>
            ),
        ];


        const MenuPanelDemoList = (
            <div>
                <MenuPanelList
                    header="Section 1"
                    menuItems = {[
                        {
                            label: 'Item 1',
                            href: '#',
                        },
                        {
                            label: 'Selected Item',
                            href: '#',
                            isSelected: true,
                            'data-foo': 'bar',
                        },
                    ]}
                />
                <MenuPanelList
                    hasDivider
                    menuItems = {[
                        {
                            label: 'Item 3',
                            icon: <SettingsIcon />,
                            href: '#',
                        },
                        {
                            label: 'Item 4',
                            href: '#',
                        },
                    ]}
                />
            </div>
        );

        return (
            <div className="Pattern__docs">
                <div data-code>
                    <Grid isNested >
                        <GridBlock>
                            <GridCol
                                mdSpan={8}
                                className={styles.MenuCol}
                            >
                                <VerticalMenuNested
                                label="Menu Label"
                                labelId="testMenu"
                                nestedButtonLabel="toggle menu"
                                subMenuItems={[
                                    (
                                    <VerticalMenuItem>
                                        <a
                                            to="#"
                                            onClick={onClickHandler}
                                        >
                                            <VerticalMenuItemContent
                                                label="Nested Item 1"
                                            />
                                        </a>
                                    </VerticalMenuItem>
                                    ),
                                
                                    (
                                    <VerticalMenuItem>
                                        <a
                                            to="#"
                                            onClick={onClickHandler}
                                        >
                                            <VerticalMenuItemContent
                                                isActive
                                                label="Nested Item 2"
                                            />
                                        </a>
                                    </VerticalMenuItem>
                                    ),
                                ]}
                            />
                            <VerticalMenuNested
                            label="Menu Label"
                            labelId="testMenu"
                            nestedButtonLabel="toggle menu"
                            subMenuItems={[
                                (
                                <VerticalMenuItem>
                                    <a
                                        to="#"
                                        onClick={onClickHandler}
                                    >
                                        <VerticalMenuItemContent
                                            label="Nested Item 1"
                                        />
                                    </a>
                                </VerticalMenuItem>
                                ),
                            
                                (
                                <VerticalMenuItem>
                                    <a
                                        to="#"
                                        onClick={onClickHandler}
                                    >
                                        <VerticalMenuItemContent
                                            isActive
                                            label="Nested Item 2"
                                        />
                                    </a>
                                </VerticalMenuItem>
                                ),
                                (  <VerticalMenuItem
                                    nestedInteractionContent={MenuPanelDemoList}
                                    menuPanelTooltip="Show Menu"
                                    >
                                        <a
                                            to="#"
                                            onClick={onClickHandler}
                                        >
                                            <VerticalMenuItemContent
                                                label="Menu With Nested Menu on Hover"
                                            />
                                        </a>
                                    </VerticalMenuItem>
                                ),
                            ]}
                        />
                                    <VerticalMenuItem>
                                    <a
                                        href="#"
                                        onClick={onClickHandler}
                                    >
                                        <VerticalMenuItemContent
                                            label="Stand Alone Link With Link Icon"
                                            linkActionIcon={(<PopOutIcon />)}
                                        />
                                    </a>
                                </VerticalMenuItem>
                                <VerticalMenuItem>
                                <a
                                    to="#"
                                    onClick={onClickHandler}
                                >
                                    <VerticalMenuItemContent
                                        label="Stand Alone Link With Label Icon"
                                        labelIcon={(<HomeIcon />)}
                                        labelIconActive={(<HomeFilledIcon />)}
                                    />
                                </a>
                            </VerticalMenuItem>
                            <VerticalMenuItem
                            nestedInteractionContent={MenuPanelDemoList}
                            menuPanelTooltip="Show Menu"
                            >
                                <a
                                    to="#"
                                    onClick={onClickHandler}
                                >
                                    <VerticalMenuItemContent
                                        label="Menu With Nested Menu on Hover"
                                    />
                                </a>
                            </VerticalMenuItem>
                            </GridCol>
                            <GridCol mdSpan={16}>
                                <Header3>Building Vertical Menus</Header3>
                                <ParagraphMd>Vertical Menus are assembled from the VerticalMenuItem component for single links and the VerticalMenuNested component for Menu Items with a nested sub-menu. See the documentation of these components for information about their use.</ParagraphMd>
                                <ParagraphMd>These components will up their given space and should be sized using the grid</ParagraphMd>
                                <Header4>Both components should be used in a binding grid.</Header4>
                                <ExampleSource>
                                {`
<GridCol
    mdSpan={8}
    className={styles.MenuCol}
>
<VerticalMenuNested
    label="Menu Label"
    labelId="testMenu"
    nestedButtonLabel="toggle menu"
    subMenuItems={[
        (
        <VerticalMenuItem>
            <a
                to="#"
                onClick={onClickHandler}
            >
                <VerticalMenuItemContent
                    label="Nested Item 1"
                />
            </a>
        </VerticalMenuItem>
        ),
    
        (
        <VerticalMenuItem>
            <a
                to="#"
                onClick={onClickHandler}
            >
                <VerticalMenuItemContent
                    isActive
                    label="Nested Item 2"
                />
            </a>
        </VerticalMenuItem>
        ),
    ]}
/>
<VerticalMenuNested
label="Menu Label"
labelId="testMenu"
nestedButtonLabel="toggle menu"
subMenuItems={[
    (
    <VerticalMenuItem>
        <a
            to="#"
            onClick={onClickHandler}
        >
            <VerticalMenuItemContent
                label="Nested Item 1"
            />
        </a>
    </VerticalMenuItem>
    ),

    (
    <VerticalMenuItem>
        <a
            to="#"
            onClick={onClickHandler}
        >
            <VerticalMenuItemContent
                isActive
                label="Nested Item 2"
            />
        </a>
    </VerticalMenuItem>
    ),
    (  <VerticalMenuItem
        nestedInteractionContent={MenuPanelDemoList}
        menuPanelTooltip="Show Menu"
        >
            <a
                to="#"
                onClick={onClickHandler}
            >
                <VerticalMenuItemContent
                    label="Menu With Nested Menu on Hover"
                />
            </a>
        </VerticalMenuItem>
    ),
]}
/>
        <VerticalMenuItem>
        <a
            href="#"
            onClick={onClickHandler}
        >
            <VerticalMenuItemContent
                label="Stand Alone Link With Link Icon"
                linkActionIcon={(<PopOutIcon />)}
            />
        </a>
    </VerticalMenuItem>
    <VerticalMenuItem>
    <a
        to="#"
        onClick={onClickHandler}
    >
        <VerticalMenuItemContent
            label="Stand Alone Link With Label Icon"
            labelIcon={(<HomeIcon />)}
            labelIconActive={(<HomeFilledIcon />)}
        />
    </a>
</VerticalMenuItem>
<VerticalMenuItem
nestedInteractionContent={MenuPanelDemoList}
menuPanelTooltip="Show Menu"
>
    <a
        to="#"
        onClick={onClickHandler}
    >
        <VerticalMenuItemContent
            label="Menu With Nested Menu on Hover"
        />
    </a>
</VerticalMenuItem>
</GridCol>
                                    `}
                                </ExampleSource>
                            </GridCol>
                        </GridBlock>
                    </Grid>
                </div>
                </div>
        );
    }
}

export default VerticalMenuDemoDocs;