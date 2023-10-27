module.exports = {
  name: 'remote-ipsum',
  exposes: {
    './Module': 'remote-ipsum/src/app/remote-entry/entry.module.ts',
  },
};
