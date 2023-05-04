import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text as TextComponent } from '@/design-system';

export default {
  component: TextComponent,
  title: 'Design System/Text',
  argTypes: {
    variant: {
      options: [
        'display',
        'headline',
        'title',
        'titleExpanded',
        'label',
        'labelMono',
        'body',
        'button',
        'textButton',
      ],
    },
    size: {
      options: ['small', 'medium', 'large'],
    },
    color: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'protocol',
        'positive',
        'negative',
        'link',
        'disabled',
      ],
      control: 'select',
    },
  },
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args} />
);

export const Text = Template.bind({});
Text.args = {
  children:
    'Audire Musicae - Musicae streaming app - musicae gratiam, curata ad tuum libitum - audire, creare, gaudere - alta fidelitate - inter amatores musicae - iunge te nobis.',
  variant: 'body',
  size: 'small',
  color: 'primary',
};
