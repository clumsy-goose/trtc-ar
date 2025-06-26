export async function onRequestPost({request}: {request: any}) {
  console.log("🚀 ~ onRequestPost ~ request:", request);
  const url = 'https://test-api.trtc.io/common/signature';
  const res = await (await fetch(url, {
    method: 'POST',
  })).text();
  return new Response(res, {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
