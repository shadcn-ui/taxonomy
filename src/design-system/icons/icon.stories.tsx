import { ComponentMeta, Story } from '@storybook/react';

import { Text } from '@/design-system';

import * as Icons from './';

export default {
  title: 'Design System/IconLibrary',
} as ComponentMeta<typeof Icons.ArrowDownIcon>;

const Template: Story = ({ size, ...args }) => {
  return (
    <Text
      as='div'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '1.5rem',
        textAlign: 'center',
      }}
      size='medium'
    >
      {Object.entries(Icons).map(([key, Icon]) => (
        <Text
          as='div'
          key={key}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '.25rem',
            fontSize: `${size}px`,
          }}
        >
          <Icon {...args} />
          <Text color='secondary' size='small'>
            {key}
          </Text>
        </Text>
      ))}
    </Text>
  );
};

export const IconLibrary = Template.bind({});
IconLibrary.args = {
  fontSize: 32,
};
