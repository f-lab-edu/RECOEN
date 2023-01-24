import axios from 'axios';
import { createArticle } from '../index';
import { article } from 'src/fixtures';

jest.mock('axios');

describe('createArticle', () => {
  it('should call axios.post with the correct URL and data', async () => {
    const spy = jest.spyOn(axios, 'post');
    await createArticle(article);
    expect(spy).toHaveBeenCalledWith('/api/article', article);
  });
});
