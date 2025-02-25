// __mocks__/prisma.ts
const prisma = {
    questionnaire: {
      create: jest.fn().mockResolvedValue({
        id: 'test-id',
        title: 'Test questionnaire',
        questions: [],
      }),
    },
  };
  
  export default prisma;
  