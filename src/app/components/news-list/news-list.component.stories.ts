import { Meta, StoryObj } from '@storybook/angular';
import { NewsListComponent } from './news-list.component';

const meta: Meta<NewsListComponent> = {
  title: 'Components/NewsList',
  component: NewsListComponent,
  tags: ['autodocs'],
  argTypes: {
    articles: {
      control: 'object',
      description: 'Array of news articles to display',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state indicator',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    selectedCategory: {
      control: 'text',
      description: 'Currently selected news category',
    },
  },
};

export default meta;
type Story = StoryObj<NewsListComponent>;

const mockArticles = [
  {
    source: { id: 'newsdit', name: 'BBC News' },
    author: 'John Smith',
    title: 'Breaking News: Major Event Unfolds',
    description: 'A significant event is currently taking place with global implications.',
    url: 'https://example.com/article1',
    urlToImage: 'https://picsum.photos/800/450?random=1',
    publishedAt: new Date().toISOString(),
    content: 'Full article content here...',
  },
  {
    source: { id: 'techcrunch', name: 'TechCrunch' },
    author: 'Jane Doe',
    title: 'Tech Giant Announces New Product',
    description: 'Revolutionary technology set to change the industry.',
    url: 'https://example.com/article2',
    urlToImage: 'https://picsum.photos/800/450?random=2',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    content: 'Full article content here...',
  },
  {
    source: { id: 'reuters', name: 'Reuters' },
    author: 'News Team',
    title: 'Global Markets React to Economic Data',
    description: 'Stock markets show mixed reactions to latest economic indicators.',
    url: 'https://example.com/article3',
    urlToImage: 'https://picsum.photos/800/450?random=3',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    content: 'Full article content here...',
  },
  {
    source: { id: 'cnn', name: 'CNN' },
    author: null,
    title: 'Weather Alert: Storm Approaching',
    description: 'Severe weather conditions expected in multiple regions.',
    url: 'https://example.com/article4',
    urlToImage: null,
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    content: 'Full article content here...',
  },
];

export const Default: Story = {
  args: {
    articles: mockArticles,
    loading: false,
    error: null,
    selectedCategory: 'general',
  },
};

export const Loading: Story = {
  args: {
    articles: null,
    loading: true,
    error: null,
    selectedCategory: 'general',
  },
};

export const Error: Story = {
  args: {
    articles: null,
    loading: false,
    error: 'Failed to load news articles. Please check your API key.',
    selectedCategory: 'general',
  },
};

export const Empty: Story = {
  args: {
    articles: [],
    loading: false,
    error: null,
    selectedCategory: 'general',
  },
};

export const SingleArticle: Story = {
  args: {
    articles: [mockArticles[0]],
    loading: false,
    error: null,
    selectedCategory: 'technology',
  },
};

export const ManyArticles: Story = {
  args: {
    articles: [...mockArticles, ...mockArticles, ...mockArticles],
    loading: false,
    error: null,
    selectedCategory: 'business',
  },
};

export const TechnologyCategory: Story = {
  args: {
    articles: mockArticles.slice(0, 2),
    loading: false,
    error: null,
    selectedCategory: 'technology',
  },
};

export const SportsCategory: Story = {
  args: {
    articles: mockArticles,
    loading: false,
    error: null,
    selectedCategory: 'sports',
  },
};
