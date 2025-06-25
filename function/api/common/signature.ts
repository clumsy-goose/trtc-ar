export function onRequestPost({request}: {request: any}) {
  console.log("🚀 ~ onRequestPost ~ request:", request);
  const url = 'https://test-api.trtc.io/api/common/signature';
  return Response.redirect(url);
}
