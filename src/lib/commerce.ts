import CommerceSDK from "@chec/commerce.js";

const API_KEY = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY;
const client = new CommerceSDK(API_KEY as string);

export default client;
