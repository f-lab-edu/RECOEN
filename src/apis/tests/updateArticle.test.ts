import axios from 'axios';
import { updateArticle, uriMap } from '../index';
import { article } from 'src/fixtures';

jest.mock('axios');

describe('updateArticle', () => {
  it('should call axios.put with the correct URL and data', async () => {
    const spy = jest.spyOn(axios, 'put');
    const category = 'programming';
    await updateArticle(article)(category);
    expect(spy).toHaveBeenCalledWith(uriMap[category], article);
  });
});
