// A class should have only one job.

// ps -: blog post management system - The system should be able 
//to handle blog posts and provide a way to print them in JSON format.

class BlogPost {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }

    getData() {
        return {
            author: this.author,
            title: this.title,
        };
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }
}

class JsonBlogPostPrinter {
    print(blogPost) {
        return JSON.stringify(blogPost.getData());
    }
}

// Example 
const author = "Niraj";
const title = "Title for blog post";
const blogPost = new BlogPost(author, title);

const jsonPrinter = new JsonBlogPostPrinter();

console.log(jsonPrinter.print(blogPost))