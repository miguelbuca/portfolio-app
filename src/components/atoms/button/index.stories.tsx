import { Meta,Story } from '@storybook/react'
import { Button, Props } from './'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onclick: { action: 'clicked' },
    children: {
      defaultValue: 'is default'
    }
  },
};
export default meta

const Template: Story<Props> = (args) => <Button {...args}/> 

export const Default = Template.bind({})
/*
Default.args = {
  children: 'default'
}*/