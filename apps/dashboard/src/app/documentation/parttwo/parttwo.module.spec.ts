import { ParttwoModule } from './parttwo.module';

describe('ParttwoModule', () => {
  let parttwoModule: ParttwoModule;

  beforeEach(() => {
    parttwoModule = new ParttwoModule();
  });

  it('should create an instance', () => {
    expect(parttwoModule).toBeTruthy();
  });
});
