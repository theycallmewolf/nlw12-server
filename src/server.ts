import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "Hello Wolf!";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.info(`
  
    🐺 HTTP server running on http://localhost:3333
  
  `);
  });

  