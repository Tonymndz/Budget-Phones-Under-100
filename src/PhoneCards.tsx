import React from 'react';
import './PhoneCards.css';

let PhoneCards = ({phone, phoneSpecs, phoneImageSrc, phoneDescription, ebayLink, linkBtnText, specsLink}) => {
  const { inches, batteryLife, Storage, RAM, Pixels, CPU } = phoneSpecs;
  console.log(inches);

  return <div className="PhoneCards">
    <h2>{phone} <span className="GoldText">(Under $100)</span></h2>
    <hr className="HrOne"/>
    <img className="phoneImg" src={phoneImageSrc} alt={phone} />
    <span>
      <b>Inches:</b> {inches}" | {" "}
      <b>Battery Life:</b> {batteryLife} hours | {" "}
      <span><b>Camera(Million Pixels): </b> {Pixels[0]}(Front), {Pixels[1]}(Back) | {" "}</span>
      <b>Storage: </b> {Storage} GB | {" "}
      <b>RAM: </b> {RAM} GB | {" "}
      <b>CPU: </b> {CPU} {" "}
    </span>
    <p>{phoneDescription}</p>
    <div className="buttonFlex">
      <a id="ebayLink" href={ebayLink}>
        <img src="https://img.icons8.com/color/100/000000/ebay.png" alt="ebay"/>
        {linkBtnText}
      </a>
      <a id="specsLink" href={specsLink}>
        <img src="https://img.icons8.com/cute-clipart/100/000000/iphone-x.png" alt="Tiny Phone" />
        In-Depth Specs
      </a>
    </div>
    <hr className="Separate" />
  </div>
}

export default PhoneCards;

/*
  Learn Redux
  Learn Typescript
  Learn Restful APIs

  Title Image: Bunch of phones
  Specs: like: https://www.rtings.com/mouse/reviews/best/claw-grip
  Description: Words of why you pickted this phone two senctences
  Replace introduction
  More Phone advice: https://www.cnet.com/news/best-phones-under-500-2020-iphone-se-pixel-4a-galaxy-a51-moto-one-5g-and-more/
  Find and replace phone

  hmmmm: instead of navbar https://www.whistleout.com/CellPhones/Cell-Phones-Under-100
*/
/*
REMEMBER WE WILL USE THE SAME OTHER PAGE STYLE FOR THIS!

Pick 7

19 BLU Advance A4 - $34 2 vs 21
19 LG VS500 K8 - 50$ 2 vs 21
6 T-Mobile LG X212TAL Aristo 1 vs 7
22 Sprint - LG G5 LS992 - 50$ WIN! 25 vs 3
5 Motorola Moto E5 Play  - 50$ WIN! 10 vs 5
9 Samsung i545 Galaxy S4  - 54$ wIN! 18 vs 9
15 New Nokia 3.1 - 50$ WIN! 17 vs 03
8 Tracfone Motorola E6 - 50$ WIN! 12 vs 04
9 Lg Stylo 2 Plus - 50$ WIN! 13 vs 04
10 LG Stylo 4 - 50$ win! 06 vs 16
9 HTC One M8 - 50$ WIN! 06 vs 15
15 LG G4 - 50$ WIN! 05 vs 20
19 Samsung Galaxy A6 - 50$ WIN! 03 vs 21
15 Samsung Galaxy A20 - $ WIN! 05 vs 20
9 LG G3 - $ 07 vs 18
16 Samsung Galaxy S5 - $ WIN! 08 vs 24
29 Samsung Galaxy S7 - $ WIN! 03 vs 32
6 Nokia 3.1 A - $ WIN! 05 vs 11
14 LG Stylo 5 - $ WIN!
19 Motorola Moto G7 - $ WIN! 02 vs 21


Phones for Under $50
29 Samsung Galaxy S7 - $ WIN! 14 vs 14 https://www.ebay.com/itm/Samsung-Galaxy-S7-G930-32GB-Verizon/184461576944?epid=16007504015&hash=item2af2c44af0:g:2~8AAOSw~ddfWCG2
22 Sprint - LG G5 LS992 - 50$ WIN! 14 vs 9 https://www.ebay.com/itm/Sprint-LG-G5-LS992-Latest-Model-32GB-Gold-Gray-Pink-Silver-Android-Phone/264105445390?epid=1266245777&hash=item3d7de9480e:g:e9AAAOSwrj9dud6v
19 Samsung Galaxy A6 - 50$ WIN! 19 vs 9 https://www.ebay.com/itm/Unlocked-Samsung-Galaxy-A6-32GB-SM-A600-GSM-AT-T-World-Phone/154103885822?epid=21024608014&hash=item23e14eaffe:g:LpUAAOSwaXRcv5N9
13 19 Motorola Moto G7 Play - $ WIN! 21 vs 10
15 Samsung Galaxy A20 - $ WIN! 22 vs 11
Nokia 3.1 

Phones for Under $100
LG G6 14 vs 10 https://www.ebay.com/itm/LG-G6-32GB-Ice-Platinum-T-Mobile-Smartphone/224084275737?epid=237193192&hash=item342c76b219:g:EzwAAOSwmgteTka1
Samsung Galaxy Note 4 8 vs 12 https://www.ebay.com/itm/Dual-SIM-Samsung-Galaxy-Note-4-Duos-N9100-5-7-16MP-4G-LTE-Android-Smartphone/264845250956?epid=1062873907&hash=item3daa01d18c:g:lN8AAOSwZqZaDFES
Google Pixel XL 12 vs 15 https://www.ebay.com/itm/Google-Pixel-XL-32GB-Black-Fully-Unlocked-Smartphone/124302613603?epid=229403262&hash=item1cf1035c63:g:-40AAOSw6KhfOuhH
Samsung Galaxy S7 0 vs 0 https://www.ebay.com/itm/Samsung-Galaxy-S7-SM-G930-32GB-Black-Onyx-Verizon/184448002788?hash=item2af1f52ae4%3Ag%3AbVQAAOSwAItZkv8X&LH_ItemCondition=1000%7C2500%7C1500&LH_BIN=1
Samsung Galaxy A6 19 vs 10 https://www.ebay.com/itm/Unlocked-Samsung-Galaxy-A6-32GB-SM-A600-GSM-AT-T-World-Phone/152132218426?hash=item236bc96e3a%3Ag%3AWMsAAOSwltNekJ%7Ed&LH_BIN=1&LH_ItemCondition=1000%7C1500%7C2500
Motorola Moto Z2 Force https://www.ebay.com/itm/Motorola-Moto-Z-Force-Droid-XT1650M-32GB-Black-Lunar-Grey-Verizon/224109803339?_trkparms=ispr%3D1&hash=item342dfc374b%3Ag%3Ag


1.) Search for all the ebay links
2.) Search for all the images links
3.) Write down the specs
4.) Add a description

*/
