import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputToggle } from './InputToggle';
import { Header3 } from '../Type';

storiesOf('components/Inputs', module).add(
    'toggle',
    () => (
        <div>
            <div>
                <InputToggle
                    label="Toggle (medium)"
                    name="demoToggleMd"
                    id="ToggleMd"
                    value="1"
                />
                <InputToggle
                    label="Toggle (Large)"
                    name="demoToggleLg"
                    id="ToggleLg"
                    size="lg"
                    value="2"
                />
                <InputToggle
                    label="Errored Toggle (Large)"
                    name="demoToggleError"
                    errorMsg="This field is required."
                    format="negative"
                    id="ToggleLgError"
                    size="lg"
                    value="3"
                    required
                />
                <InputToggle
                    label="Disabled(Large)"
                    name="demoToggleDisabled"
                    id="ToggleLgDisabled"
                    size="lg"
                    value="4"
                    disabled
                />

                <Header3>Hidden Labels</Header3>
                <InputToggle
                    label="Toggle Hidden Label"
                    name="demoToggleMdHidden"
                    id="ToggleMdHidden"
                    value="1"
                    hideLabel
                />
            </div>
            <div
                style={{
                    background: '#222',
                    padding: '2rem',
                    color: '#FFF',
                }}
            >
                <InputToggle
                    label="Toggle (Large)"
                    name="demoToggleLg"
                    id="ToggleLgDark"
                    value="1"
                    theme="dark"
                    size="lg"
                />
                <InputToggle
                    label="Toggle (medium)"
                    name="demoToggleMd"
                    id="ToggleMdDark"
                    value="1"
                    theme="dark"
                />
            </div>
        </div>
    ),
    {
        info: {
            inline: true,
            propTables: [InputToggle],
        },
    },
);