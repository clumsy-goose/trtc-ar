export async function onRequest({request}: {request: any}) {
  console.log("🚀 ~ onRequestPost ~ request:", request);
  // const url = 'https://test-api.trtc.io/common/signature';
  // const res = await (await fetch(url, {
  //   method: 'POST',
  // })).text();
  const res = JSON.stringify({
    test: 'test',
    result: 'success',
  })
  return new Response(res, {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
