interface Payload {
  message: string;
}

export default {
  fetch(req) {
    const payload: Payload = { message: "hello world from ts" };
    return new Response(JSON.stringify(payload));
  },
};
