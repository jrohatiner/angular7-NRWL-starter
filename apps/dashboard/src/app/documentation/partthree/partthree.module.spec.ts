import { PartthreeModule } from './partthree.module';

describe('PartthreeModule', () => {
  let partthreeModule: PartthreeModule;

  beforeEach(() => {
    partthreeModule = new PartthreeModule();
  });

  it('should create an instance', () => {
    expect(partthreeModule).toBeTruthy();
  });
});
