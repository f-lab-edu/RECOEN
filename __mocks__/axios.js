const mockAxios = jest.createMockFromModule('axios');

mockAxios.create.mockReturnThis();
mockAxios.defaults.headers.common.Authorization = 'token';

export default mockAxios;
