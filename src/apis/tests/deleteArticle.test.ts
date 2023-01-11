import axios from 'axios';
import { deleteArticle, uriMap } from '../index';

jest.mock('axios');

describe('deleteArticle', () => {
  it('should call axios.delete with the correct URL and data', async () => {
    const spy = jest.spyOn(axios, 'delete');
    const id = '1';
    const category = 'programming';
    await deleteArticle(category)(id);
    expect(spy).toHaveBeenCalledWith(uriMap[category], { data: { id } });
  });
});
