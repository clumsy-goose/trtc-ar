export function onRequestPost({request}: {request: any}) {
  console.log("🚀 ~ onRequestPost ~ request:", request);
  // const url = 'https://test-api.trtc.io/api/common/signature';
  return new Response(request, {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
