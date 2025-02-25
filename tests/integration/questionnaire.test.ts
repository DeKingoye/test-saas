// Ajoute ceci tout en haut
jest.mock('next/server', () => ({
    NextResponse: {
      json: jest.fn((body, options) => ({
        json: () => Promise.resolve(body),
        status: options.status
      }))
    }
  }));
  
  jest.mock('@/lib/prisma', () => ({
    questionnaire: {
      create: jest.fn().mockResolvedValue({
        id: 'test-id',
        title: 'Test questionnaire',
        questions: [],
      }),
    },
  }));
  
  import { POST } from '@/app/api/questionnaire/route';
  
  test('créer un questionnaire (intégration)', async () => {
    const req = {
      json: async () => ({
        title: 'Test questionnaire',
        questions: [{ text: 'Question 1?', type: 'TEXT' }],
      }),
    };
  
    const response = await POST(req as any);
    const data = await response.json();
  
    expect(response.status).toBe(201);
    expect(data).toHaveProperty('title', 'Test questionnaire');
  });
  