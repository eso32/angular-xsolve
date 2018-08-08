import { UsermanagerModule } from './usermanager.module';

describe('UsermanagerModule', () => {
  let usermanagerModule: UsermanagerModule;

  beforeEach(() => {
    usermanagerModule = new UsermanagerModule();
  });

  it('should create an instance', () => {
    expect(usermanagerModule).toBeTruthy();
  });
});
