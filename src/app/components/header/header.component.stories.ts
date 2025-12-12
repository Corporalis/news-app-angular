import { provideRouter } from '@angular/router';
import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    categories: {
      control: 'object',
      description: 'Array of news categories to display in navigation',
    },
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
    categories: [
      { id: '1', name: 'General', value: '' },
      { id: '2', name: 'Business', value: 'business' },
      { id: '3', name: 'Technology', value: 'technology' },
      { id: '4', name: 'Science', value: 'science' },
      { id: '5', name: 'Sports', value: 'sports' },
      { id: '6', name: 'Entertainment', value: 'entertainment' },
      { id: '7', name: 'Health', value: 'health' },
    ],
  },
};

export const WithLimitedCategories: Story = {
  args: {
    categories: [
      { id: '1', name: 'General', value: '' },
      { id: '2', name: 'Business', value: 'business' },
      { id: '3', name: 'Technology', value: 'technology' },
    ],
  },
};

export const Empty: Story = {
  args: {
    categories: [],
  },
};

export const WithNullCategories: Story = {
  args: {
    categories: null,
  },
};
