import { c as cacheApi } from './cache-54abc38e.js';

function methods(request, opt) {
  return {
    get: (type, id, query) => {
      return cacheApi.getFetch(`content_${type}`, id, () =>
        request('get', `/content/${type}`, id, {
          $preview: opt.previewContent,
          ...(query || {}),
        }),
      );
    },

    list: (type, query) => request('get', `/content/${type}`, undefined, query),
  };
}

export { methods as m };