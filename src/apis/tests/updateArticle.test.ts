import axios from 'axios';
import { updateArticle } from '../index';
import { article } from 'src/fixtures';

jest.mock('axios');

describe('updateArticle', () => {
  it('should call axios.put with the correct URL and data', async () => {
    const spy = jest.spyOn(axios, 'put');
    await updateArticle(article);
    expect(spy).toHaveBeenCalledWith('/api/article', article);
  });
});
