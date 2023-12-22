export interface ShopItemModel {
  itemName: string;
  itemPrice: number;
  availableSizes: string[];
  availableColors: string[];
  images: string[];
  stripeBtnId: string | undefined;
}
