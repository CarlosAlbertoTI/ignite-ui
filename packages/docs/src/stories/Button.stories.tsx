import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowArcRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Cancel',
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo Passo
        <ArrowArcRight weight="bold" />
      </>
    ),
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
