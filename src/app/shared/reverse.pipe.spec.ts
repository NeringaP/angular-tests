import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
it('should create the app', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hell')).toEqual('lleh');
});

});
