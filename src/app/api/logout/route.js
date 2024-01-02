// Mock api response
export async function GET() {
  const data = {
    name: 'John',
    email: 'john@doe.co',
  };

  return Response.json(data);
}
