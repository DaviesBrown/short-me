import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import Pocketbase from "pocketbase";

/**
 * Initialize and export pocketbase
 */
const pb = new Pocketbase(PUBLIC_POCKETBASE_URL);
export default pb;
