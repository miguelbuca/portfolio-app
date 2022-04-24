import { Meta,Story } from '@storybook/react'
import { UserPhoto, Props } from '.'

const meta: Meta = {
  title: "UserPhoto",
  component: UserPhoto,
  argTypes: {
    onclick: { action: "clicked" },
    children: {
      defaultValue: "is default",
    },
  },
};
export default meta

const Template: Story<Props> = (args) => <UserPhoto {...args} />; 

export const Default = Template.bind({})
/*
Default.args = {
  children: 'default'
}*/