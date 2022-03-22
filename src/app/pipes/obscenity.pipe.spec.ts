import { ObscenityPipe } from './obscenity.pipe';

describe('ObscenityPipe', () => {
  it('create an instance', () => {
    const pipe = new ObscenityPipe();
    expect(pipe).toBeTruthy();
  });
});
