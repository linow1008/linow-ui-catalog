import type { Meta, StoryObj } from "@storybook/react";

import { UserProfile } from "./UserProfile";

const meta = {
  title: "Components/UserProfile",
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // 여기에 컨트롤할 props를 정의하세요
  },
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "UserProfile Component",
  },
};
