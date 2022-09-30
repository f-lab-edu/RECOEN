import { getArticle, client } from '.';

jest.mock('axios');

describe('apiHandler', () => {
  describe('getArticle', () => {
    beforeEach(() => {
      (client.get as jest.Mock).mockImplementation(() => ({
        _id: '1',
        title: 'title',
        description: 'description',
        content: 'content',
      }));
    });

    it('client get is called with correct parameters', async () => {
      const id = '1';
      const response = await getArticle(id);

      expect(client.get).toHaveBeenCalledWith('/api/article', {
        data: id,
      });
      expect(response).toStrictEqual({
        _id: '1',
        title: 'title',
        description: 'description',
        content: 'content',
      });
    });
  });
});
