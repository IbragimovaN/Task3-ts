interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = (url: string): Promise<Comment[]> => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

getData(COMMENTS_URL).then((data: Comment[]) => {
  data.map((item: Comment) =>
    console.log(`ID: ${item.id}, email: ${item.email}`)
  );
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
