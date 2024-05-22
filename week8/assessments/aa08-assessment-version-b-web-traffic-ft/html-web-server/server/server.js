const http = require('http');
const fs = require('fs');
const path = require('path');

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
    const htmlFile = fs.readFileSync(path.join(__dirname, "views/error.html"), "utf-8");
    const resBody = htmlFile
        .replace(/#{message}/g, error.message);

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = error.statusCode || 400;
    res.write(resBody);
    return res.end();
  }

  let reqBody = '';
  
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (reqBody && req.headers['content-type'] === "application/x-www-form-urlencoded") {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    } else {
      req.body = {};
    }

    if (req.method === "GET" && req.url === "/authors") {
      const htmlFile = fs.readFileSync(path.join(__dirname, "views/authors.html"), "utf-8");
      const resBody = htmlFile
          .replace(
            /#{authors}/g,
            Object.values(authors).map(author => `
              <li><a href="/authors/${author.authorId}">${author.name}</a></li>
            `).join('</n>')
          );

      res.setHeader('Content-Type', 'text/html');
      res.write(resBody);
      return res.end();
    }

    if (req.method === "GET" && req.url === "/authors/new") {
      const htmlFile = fs.readFileSync(path.join(__dirname, "views/new-author.html"), "utf-8");
      const resBody = htmlFile;

      res.setHeader('Content-Type', 'text/html');
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

      return redirectTo(`/authors/${author.authorId}`);
    }

    if (req.method === "GET" && req.url.startsWith("/authors")) {
      const urlParts = req.url.split("/");
      const authorId = urlParts[2];
      if (urlParts.length === 3 && authorId) {
        const author = authors[authorId];

        if (!author) return renderError(new NotFoundError('Author not found'));

        const htmlFile = fs.readFileSync(path.join(__dirname, "views/author-details.html"), "utf-8");
        let reqBody = htmlFile
          .replace(/#{name}/g, author.name)
          .replace(/#{authorId}/g, author.authorId)
          .replace(
            /#{books}/g,
            Object.values(books)
              .filter(book => book.authorId == authorId)
              .map(book => `
                <li><a href="/books/${book.bookId}">${book.title}</a></li>
              `).join('\n')
          );

        res.setHeader('Content-Type', 'text/html');
        res.write(reqBody);
        return res.end();
      }
    }

    if (req.method === "GET" && req.url.startsWith("/authors")) {
      const urlParts = req.url.split("/");
      const authorId = urlParts[2];
      if (urlParts.length === 4 && authorId && urlParts[3] === "edit") {
        const author = authors[authorId];

        if (!author) return renderError(new NotFoundError('Author not found'));

        const htmlFile = fs.readFileSync(path.join(__dirname, "views/edit-author.html"), "utf-8");
        let reqBody = htmlFile
          .replace(/#{name}/g, author.name)
          .replace(/#{authorId}/g, author.authorId);

        res.setHeader('Content-Type', 'text/html');
        res.write(reqBody);
        return res.end();
      }
    }

    if (req.method === "POST" && req.url.startsWith("/authors")) {
      const urlParts = req.url.split("/");
      const authorId = urlParts[2];
      if (urlParts.length === 3 && authorId) {
        const author = authors[authorId];

        if (!author) return renderError(new NotFoundError('Author not found'));

        const { name } = req.body;
        if (!name) return renderError(new BodyError());

        author.name = name;

        return redirectTo(`/authors/${author.authorId}`);
      }
    }

    if (req.method === "GET" && req.url.startsWith("/genres")) {
      const urlParts = req.url.split("/");
      const genre = urlParts[2];
      if (urlParts.length === 4 && genre && urlParts[3] === "books") {
        const htmlFile = fs.readFileSync(path.join(__dirname, "views/books.html"), "utf-8");
        let reqBody = htmlFile
          .replace(/#{genre}/g, genre)
          .replace(
            /#{books}/g,
            Object.values(books)
              .filter(book => book.genre.toLowerCase() == genre.toLowerCase())
              .map(book => `
                <li><a href="/books/${book.bookId}">${book.title}</a></li>
              `).join('\n')
          );

        res.setHeader('Content-Type', 'text/html');
        res.write(reqBody);
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

        const htmlFile = fs.readFileSync(path.join(__dirname, "views/book-details.html"), "utf-8");
        let reqBody = htmlFile
          .replace(/#{title}/g, book.title)
          .replace(/#{genre}/g, book.genre)
          .replace(/#{authorId}/g, book.authorId)
          .replace(/#{authorName}/g, author.name)
          .replace(/#{bookId}/g, book.bookId);

        res.setHeader('Content-Type', 'text/html');
        res.write(reqBody);
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
        books[book.bookId] = book;

        return redirectTo(`/books/${book.bookId}`);
      }
    }

    if (req.method === "POST" && req.url.startsWith("/books")) {
      const urlParts = req.url.split("/");
      const bookId = urlParts[2];
      if (urlParts.length === 4 && bookId && urlParts[3] === "delete") {
        const book = books[bookId];

        if (!book) return renderError(new NotFoundError('Book not found'));

        delete books[book.bookId];

        return redirectTo(`/authors/${book.authorId}`);
      }
    }

    return renderError(new NotFoundError('Page Not Found'));
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log('Server is listening on port', port));
