import samsungGalaxyNote4 from './images/Samsung-Galaxy-Note-4.jpg'
import LG_G6 from './images/LG_G6.jpg'
import Samsung_Galaxy_S7 from './images/Samsung-Galaxy-S7.jpg'
import Samsung_Galaxy_A6 from './images/Samsung_Galaxy_A6.jpg'
import googlePixelXL from './images/google-pixel-2-xl-vs-pixel-xl-aa-4-of-11.jpg'

export interface IPhoneList {
  phone: string;
  phoneImageSrc: string;
  phoneDescription: string;
  ebayLink: string;
  linkBtnText: string;
  specsLink: string;
  phoneSpecs: {
    inches: number;
    batteryLife: number;
    RAM: number;
    Storage: number;
    Pixels: number[];
    CPU: string;
  };
}

export let phoneList: IPhoneList[] = [
  {
    phone: "Samsung Galaxy Note 4",
    phoneImageSrc: samsungGalaxyNote4,
    phoneDescription: "If you ever wanted to use a phone that has a built-in pen and you're looking for a phone under $100, this your phone. Out of all these phones in this list, the biggest screen size of 5.7\" and has one of the best back camera pixel resolution of 16 Million Pixels and has high CPU if 2.7Ghz for its quad-core.",
    ebayLink: "https://www.ebay.com/itm/Dual-SIM-Samsung-Galaxy-Note-4-Duos-N9100-5-7-16MP-4G-LTE-Android-Smartphone/264845250956?epid=1062873907&hash=item3daa01d18c:g:lN8AAOSwZqZaDFES",
    linkBtnText: "$89.77",
    specsLink: "https://www.phonemore.com/specs/samsung/galaxy-note-4/",
    phoneSpecs: { inches: 57, batteryLife: 20, RAM: 3, Storage: 32, Pixels: [3.7, 16], CPU: "2.7Ghz Quad-Core" },
  },
  {
    phone: "LG G6",
    phoneImageSrc: LG_G6,
    phoneDescription: "The LG G6 is the phone that I would consider to be the best overall its not amazing in anyone of its aspects, but all of its aspects are great. Like it's great battery life of 23.5 hours, great RAM of 4GB, great screen inches of 5.7\", great camera resolution. It's a great overall phone pick.",
    ebayLink: "https://www.ebay.com/itm/LG-G6-32GB-Ice-Platinum-T-Mobile-Smartphone/224084275737?epid=237193192&hash=item342c76b219:g:EzwAAOSwmgteTka1",
    linkBtnText: "$59.99",
    specsLink: "https://www.phonemore.com/specs/lg/g6/",
    phoneSpecs: { inches: 5.7, batteryLife: 23.5, RAM: 4, Storage: 32, Pixels: [5, 13], CPU: "1.97Ghz Quad-Core" },
  },
  {
    phone: "Samsung Galaxy S7",
    phoneImageSrc: Samsung_Galaxy_S7,
    phoneDescription: "The Samsung Galaxy S7 has a bit smaller screen size of 5.1\" but it makes up for it in its other aspects of specs. Like high RAM 4GB, high battery life 28 Hours, supports wireless charging and is actaully water proof!",
    ebayLink: "https://www.ebay.com/itm/Samsung-Galaxy-S7-SM-G930-32GB-Black-Onyx-Verizon/184448002788?hash=item2af1f52ae4%3Ag%3AbVQAAOSwAItZkv8X&LH_ItemCondition=1000%7C2500%7C1500&LH_BIN=1",
    linkBtnText: "$80.00",
    specsLink: "https://www.phonemore.com/specs/samsung/galaxy-s7/",
    phoneSpecs: { inches: 5.1, batteryLife: 28, RAM: 4, Storage: 32, Pixels: [5, 12.2], CPU: "1.87Ghz Quad-Core" },
  },
  {
    phone: "Google Pixel XL",
    phoneImageSrc: googlePixelXL,
    phoneDescription: "This Google Pixel XL has two amazing aspects and great in the others. It has a insane storage space 128GB, which is more than you will ever need, and a battery life of 32 hours which is a really nice bonus for long car, plane, and bus trips.",
    ebayLink: "https://www.ebay.com/itm/Google-Pixel-XL-32GB-Black-Fully-Unlocked-Smartphone/124302613603?epid=229403262&hash=item1cf1035c63:g:-40AAOSw6KhfOuhH",
    linkBtnText: "$99.99",
    specsLink: "https://www.phonemore.com/specs/google/pixel-xl/",
    phoneSpecs: { inches: 5.5, batteryLife: 32, RAM: 4, Storage: 128, Pixels: [8, 12.3], CPU: "1.87Ghz Quad-Core" },
  },
  {
    phone: "Samsung Galaxy A6",
    phoneImageSrc: Samsung_Galaxy_A6,
    phoneDescription: "The samsung galaxy A6 has one amazing aspect and one slighting amazing aspect and it the rest are decent overall. Its front camera has a resolution of 16 million pixels and most other phones have around 5 to 8 million pixels for its front camera. This phone has double of that, so this phone is one of the best phones under $100 for selfies. Then for all your selfies, videos and pictures it has a storage space of 64GB to hold all of them!",
    ebayLink: "https://www.ebay.com/itm/Unlocked-Samsung-Galaxy-A6-32GB-SM-A600-GSM-AT-T-World-Phone/152132218426?hash=item236bc96e3a%3Ag%3AWMsAAOSwltNekJ%7Ed&LH_BIN=1&LH_ItemCondition=1000%7C1500%7C2500",
    linkBtnText: "$84.50",
    specsLink: "https://www.phonemore.com/specs/samsung/galaxy-a6/",
    phoneSpecs: { inches: 5.6, batteryLife: 20, RAM: 4, Storage: 64, Pixels: [16, 16], CPU: "1.6Ghz Octa-Core" },
  }
]