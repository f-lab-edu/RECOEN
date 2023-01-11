import axios from 'axios';
import { createArticle, uriMap } from '../index';
import { article } from 'src/fixtures';

jest.mock('axios');

describe('createArticle', () => {
  it('should call axios.post with the correct URL and data', async () => {
    const spy = jest.spyOn(axios, 'post');
    const category = 'programming';
    await createArticle(article)(category);
    expect(spy).toHaveBeenCalledWith(uriMap[category], article);
  });
});
