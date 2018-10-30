import { GetstartedModule } from './getstarted.module';

describe('GetstartedModule', () => {
  let getstartedModule: GetstartedModule;

  beforeEach(() => {
    getstartedModule = new GetstartedModule();
  });

  it('should create an instance', () => {
    expect(getstartedModule).toBeTruthy();
  });
});
