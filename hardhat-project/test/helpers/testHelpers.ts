import _ from 'lodash';
import { faker } from '@faker-js/faker';

export abstract class TestHelpers {
  public static getMockUris(count: number): string[] {
    return _.times(count, () => faker.internet.url());
  }
}
