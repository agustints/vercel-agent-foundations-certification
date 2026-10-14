import type { InferUITools, UIMessage, UIToolInvocation } from "ai";
import type { getAllCategories, getProductDetails, returnOrder, searchProducts } from "@/lib/tools";

// UI types for the shopping chat. The agent itself runs in lib/workflows/chat-flow.ts;
// keep this tool list in sync with the one there.
type ShoppingTools = {
  searchProducts: typeof searchProducts;
  getAllCategories: typeof getAllCategories;
  returnOrder: typeof returnOrder;
  getProductDetails: typeof getProductDetails;
};

export type ShoppingAgentUIMessage = UIMessage<unknown, never, InferUITools<ShoppingTools>>;
export type SearchProductsToolInvocation = UIToolInvocation<typeof searchProducts>;
export type ProductDetailsToolInvocation = UIToolInvocation<typeof getProductDetails>;
