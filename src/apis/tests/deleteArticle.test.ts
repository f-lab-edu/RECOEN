import axios from 'axios';
import { deleteArticle } from '..';

jest.mock('axios');

describe('deleteArticle', () => {
  it('should call axios.delete with the correct URL and data', async () => {
    const spy = jest.spyOn(axios, 'delete');
    const id = '1';
    await deleteArticle(id);
    expect(spy).toHaveBeenCalledWith('/api/article', { data: { id } });
  });
});
