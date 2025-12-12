import { Meta, StoryObj } from '@storybook/angular';
import { NewsCardComponent } from './news-card.component';

const meta: Meta<NewsCardComponent> = {
  title: 'Components/NewsCard',
  component: NewsCardComponent,
  tags: ['autodocs'],
  argTypes: {
    article: {
      control: 'object',
      description: 'News article data to display',
    },
  },
};

export default meta;
type Story = StoryObj<NewsCardComponent>;

const mockArticle = {
  source: {
    id: 'newsdit',
    name: 'BBC News',
  },
  author: 'BBC News Staff',
  title: 'Breaking: Major Technology Breakthrough Announced',
  description:
    'Scientists have made a groundbreaking discovery that could revolutionize the way we approach renewable energy and sustainability.',
  url: 'https://example.com/article',
  urlToImage: 'https://picsum.photos/800/450',
  publishedAt: new Date().toISOString(),
  content:
    'In a stunning announcement today, researchers revealed a new technology that promises to change the landscape of renewable energy forever...',
};

export const Default: Story = {
  args: {
    article: mockArticle,
  },
};

export const WithLongTitle: Story = {
  args: {
    article: {
      ...mockArticle,
      title:
        'This is an extremely long title that demonstrates how the news card handles very lengthy headlines that might span multiple lines and need to be truncated or wrapped appropriately for better readability',
    },
  },
};

export const WithoutImage: Story = {
  args: {
    article: {
      ...mockArticle,
      urlToImage: null,
    },
  },
};

export const WithoutAuthor: Story = {
  args: {
    article: {
      ...mockArticle,
      author: null,
    },
  },
};

export const WithShortDescription: Story = {
  args: {
    article: {
      ...mockArticle,
      description: 'Brief news update.',
    },
  },
};

export const OldArticle: Story = {
  args: {
    article: {
      ...mockArticle,
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    },
  },
};

export const RecentArticle: Story = {
  args: {
    article: {
      ...mockArticle,
      publishedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    },
  },
};
