import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button as ButtonComponent } from '@/design-system';
import { PlusIcon } from '@/design-system/icons';

export default {
  component: ButtonComponent,
  title: 'Design System/Button',
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'positive',
        'negative',
        'warning',
        'protocol',
        'link',
        'text',
      ],
    },
    size: {
      options: ['small', 'medium', 'large'],
    },
    IconPosition: {
      defaultValue: 'left',
      options: ['right', 'left'],
      control: {
        type: 'select',
      },
    },
    showIcon: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: {
      exclude: /asChild|icon/,
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent
    {...args}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    iconPosition={args.IconPosition}
    icon={
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      args.showIcon ? <PlusIcon /> : undefined
    }
  >{`I'm a Button`}</ButtonComponent>
);

export const Button = Template.bind({});
Button.args = {
  variant: 'secondary',
  size: 'medium',
};
