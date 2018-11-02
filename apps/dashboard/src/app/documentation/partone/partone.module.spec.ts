import { PartoneModule } from './partone.module';

describe('PartoneModule', () => {
  let partoneModule: PartoneModule;

  beforeEach(() => {
    partoneModule = new PartoneModule();
  });

  it('should create an instance', () => {
    expect(partoneModule).toBeTruthy();
  });
});
