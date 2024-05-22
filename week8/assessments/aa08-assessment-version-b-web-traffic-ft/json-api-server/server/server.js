const http = require('http');

class BodyError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BodyError);
    }

    this.message = this.message || "Something is wrong with the body";
    this.statusCode = 400;
    this.name = 'BodyError';
  }
}

class NotFoundError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    this.message = this.message || "Not Found";
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

const books = {
  1: {
    bookId: 1,
    title: "The Night Watchman",
    genre: "Fiction",
    authorId: 1
  },
  2: {
    bookId: 2,
    title: "Wilmington's Lie",
    genre: "Nonfiction",
    authorId: 2
  },
  3: {
    bookId: 3,
    title: "The Dead Are Arising",
    genre: "Biography",
    authorId: 3
  },
  4: {
    bookId: 4,
    title: "Franchise",
    genre: "Nonfiction",
    authorId: 4
  },
  5: {
    bookId: 5,
    title: "Postcolonial Love Poem",
    genre: "Poetry",
    authorId: 5
  }
};

const authors = {
  1: {
    authorId: 1,
    name: "Louise Erdrich"
  },
  2: {
    authorId: 2,
    name: "David Zucchino"
  },
  3: {
    authorId: 3,
    name: "Les Payne"
  },
  4: {
    authorId: 4,
    name: "Marcia Chatelain"
  },  
  5: {
    authorId: 5,
    name: "Natalie Diaz"
  }
};

let nextAuthorId = 6;
let nextBookId = 6;

function getNewAuthorId() {
  const newAuthorId = nextAuthorId;
  nextAuthorId++;
  return newAuthorId;
}

function getNewBookId() {
  const newBookId = nextBookId;
  nextBookId++;
  return newBookId;
}

const server = http.createServer((req, res) => {
  function redirectTo(urlPath) {
    res.statusCode = 302;
    res.setHeader('Location', urlPath);
    return res.end();
  }

  function renderError(error) {
    const resBody = JSON.stringify({ message: error.message });
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = error.statusCode || 400;
    res.write(resBody);
    return res.end();
  }

  let reqBody = '';
  
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (reqBody && req.headers['content-type'] === "application/json") {
      req.body = JSON.parse(reqBody);
    } else {
      req.body = {};
    }

    if (req.method === "GET" && req.url === "/authors") {
      const resBody = JSON.stringify(Object.values(authors));
      res.setHeader('Content-Type', 'application/json');
      res.write(resBody);
      return res.end();
    }

    if (req.method === "POST" && req.url === "/authors") {
      const { name } = req.body;
      if (!name) return renderError(new BodyError());

      const author = {
        name,
        authorId: getNewAuthorId()
      };
      authors[author.authorId] = author;

      const resBody = JSON.stringify(author);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 201;
      res.write(resBody);
      return res.end();
    }

    if (req.method === "GET" && req.url.startsWith("/authors")) {
      const urlParts = req.url.split("/");
      const authorId = urlParts[2];
      if (urlParts.length === 3 && authorId) {
        const author = authors[authorId];

        if (!author) return renderError(new NotFoundError('Author not found'));

        const authorBooks = Object.values(books).filter(book => book.authorId == authorId);

        const resBody = JSON.stringify({
          ...author,
          books: authorBooks
        });
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    if ((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/authors")) {
      const urlParts = req.url.split("/");
      const authorId = urlParts[2];
      if (urlParts.length === 3 && authorId) {
        const author = authors[authorId];

        if (!author) return renderError(new NotFoundError('Author not found'));

        const { name } = req.body;
        if (!name) return renderError(new BodyError());

        author.name = name;

        const resBody = JSON.stringify(author);
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    if (req.method === "GET" && req.url.startsWith("/authors")) {
      const urlParts = req.url.split("/");
      const authorId = urlParts[2];
      if (urlParts.length === 4 && authorId && urlParts[3] === "books") {
        const author = authors[authorId];

        if (!author) return renderError(new NotFoundError('Author not found'));

        const authorBooks = Object.values(books).filter(book => {
          return book.authorId == authorId
        });

        const resBody = JSON.stringify(authorBooks);
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    if (req.method === "GET" && req.url.startsWith("/genres")) {
      const urlParts = req.url.split("/");
      const genre = urlParts[2];
      if (urlParts.length === 4 && genre && urlParts[3] === "books") {
        const genreBooks = Object.values(books).filter(book => {
          return book.genre.toLowerCase() == genre.toLowerCase()
        });

        const resBody = JSON.stringify(genreBooks);
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    if (req.method === "GET" && req.url.startsWith("/books")) {
      const urlParts = req.url.split("/");
      const bookId = urlParts[2];
      if (urlParts.length === 3 && bookId) {
        const book = books[bookId];

        if (!book) return renderError(new NotFoundError('Book not found'));

        const author = Object.values(authors).find(author => author.authorId == book.authorId);

        const resBody = JSON.stringify({
          ...book,
          author
        });

        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    if (req.method === "POST" && req.url.startsWith("/authors")) {
      const urlParts = req.url.split("/");
      const authorId = urlParts[2];
      if (urlParts.length === 4 && authorId && urlParts[3] === "books") {
        const author = authors[authorId];

        if (!author) return renderError(new NotFoundError('Author not found'));

        const { title, genre } = req.body;
        if (!title || !genre) return renderError(new BodyError());

        const book = {
          title,
          genre,
          bookId: getNewBookId(),
          authorId: Number(authorId)
        }
        authors[author.bookId] = book;

        const resBody = JSON.stringify(book);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 201;
        res.write(resBody);
        return res.end();
      }
    }

    if (req.method === "DELETE" && req.url.startsWith("/books")) {
      const urlParts = req.url.split("/");
      const bookId = urlParts[2];
      if (urlParts.length === 3 && bookId) {
        const book = books[bookId];

        if (!book) return renderError(new NotFoundError('Book not found'));

        delete books[book.bookId];

        const resBody = JSON.stringify({ message: "Successfully deleted" });
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    return renderError(new NotFoundError('API Endpoint Not Found'));
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log('Server is listening on port', port));
