export async function json(){
  const buffers = []

  for await (const chunk of req){
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }
}