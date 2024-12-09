import { AUTHORS, MILLISECONS_IN_DAY } from "./constants";

export function highlightText(text, query) {
    if (!query) return text;
    const queryRegex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(queryRegex);
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} >
          {part}
        </mark>
      ) : (
        part
      )
    );
  }


  export function getRandomElem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  export function assignDatesAndAuthorsToPosts(posts, skip) {
    const today = new Date();
  
    posts.forEach((post, index) => {
      const daysOffset = skip + index - 9;
      const postDate = new Date(
        today.getTime() - daysOffset * MILLISECONS_IN_DAY
      );
      post.publicationDate = postDate.toISOString().slice(0, 10);
      post.author = getRandomElem(AUTHORS);
    });
  
    return posts;
  }
