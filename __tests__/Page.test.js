import Page from '@/app/page';
import { render, screen } from '@testing-library/react';

jest.mock('@/lib/api', () => ({
  fetchPosts: jest.fn().mockResolvedValue([
    { id: 1, title: 'Post 1', body: 'Body 1', publicationDate: '2023-01-01' },
  ]),
}));

describe('Page', () => {
  it('renders the heading', async () => {
    render(await Page());

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Recent Blog Posts');
  });
});
