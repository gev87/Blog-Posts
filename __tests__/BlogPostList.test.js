import { render, screen } from '@testing-library/react';
import { BlogPostList } from '@/components/Blog';

describe('BlogPostList', () => {
  it('renders a list of posts', () => {
    const initialPosts = [
        { id: 1, title: 'Post 1', body: 'Body 1', publicationDate: '2023-01-01', imageUrl: '/test-image1.jpg' },
        { id: 2, title: 'Post 2', body: 'Body 2', publicationDate: '2023-01-02', imageUrl: '/test-image2.jpg' },
      ];

    render(<BlogPostList initialPosts={initialPosts} />);

    expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Post 2/i)).toBeInTheDocument();
  });
});

