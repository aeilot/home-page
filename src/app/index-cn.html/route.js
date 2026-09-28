// The retired Chinese homepage has no equivalent replacement.
export function GET() {
  return new Response('This page is no longer available.\n', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
