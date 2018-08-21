// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Access from '../../../app/middleware/access';
import Transfer from '../../../app/middleware/transfer';

declare module 'egg' {
  interface IMiddleware {
    access: typeof Access;
    transfer: typeof Transfer;
  }
}
