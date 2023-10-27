module.exports = {
  name: 'remote-lorem',
  exposes: {
    './Module': 'remote-lorem/src/app/remote-entry/entry.module.ts',
  },
};
