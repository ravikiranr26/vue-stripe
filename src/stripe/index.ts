import {
  STRIPE_PARTNER_DETAILS,
  INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
import { isSecureHost } from '../utils';

declare global {
  interface Window {
    Stripe:any;
  }
}

export default {
  install (Vue: any, options: any) {
    if (!isSecureHost(options.testMode)) console.warn(INSECURE_HOST_ERROR_MESSAGE);
    const {
      pk,
      stripeAccount,
      apiVersion,
      locale,
    } = options;
    const stripe = window.Stripe(pk, { stripeAccount, apiVersion, locale });
    stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    Vue.prototype.$stripe = stripe;
  },
};
