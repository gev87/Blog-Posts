import { render, screen } from "@testing-library/react";
import BlogPostListItem from "@/components/Blog/BlogPostListItem";

describe("BlogPostListItem", () => {
  it("renders the blog post details correctly", () => {
    const props = {
      id: 1,
      imageUrl: "/test-image.jpg",
      title: "Test Post",
      body: "Test body content",
      publicationDate: "2023-01-01",
      searchQuery: "Test",
    };

    render(<BlogPostListItem {...props} />);

    expect(screen.getByAltText("Test Post")).toBeInTheDocument();

    const matchingElements = screen.getAllByText((content, element) => {
      return element.textContent === "Test Post";
    });

    expect(matchingElements).toHaveLength(2);

    const linkElement = matchingElements[0].closest("a");
    expect(linkElement).toHaveAttribute("href", "/blog/1");

    expect(matchingElements[1]).toHaveClass("hover:underline");
  });
});
