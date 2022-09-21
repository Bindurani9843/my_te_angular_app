import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//access microoven.ts
import { Tops } from './tops';
@Injectable({
  providedIn: 'root'
})
export class TopsService {

  constructor() { }
  tops: Tops[] = [
    {
      pid: 1,
      pname: 'Top',
      pdescription: 'Party wear',
      price: 950,
      img: 'https://img3.junaroad.com/uiproducts/18290071/pri_175_p-1646833725.jpg'
    },
    {
      pid: 2,
      pname: 'Top',
      pdescription: 'Women Blue Denim Off-Shoulder Cinched Waist Top',
      price: 1200,
      img: 'https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1978689/2017/6/29/11498724165163-Womens-Denim-Off-Shoulder-Lace-Up-Top-621498724164951-2.jpg'
    },
    {
      pid: 3,
      pname: 'Top',
      pdescription: 'Black top',
      price: 800,
      img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11157052/2021/9/15/15ebc0f3-06b4-43dd-9eb8-759ea3c30d871631705427380-QUIERO-Women-Black--White-Embroidered-Top-3041631705426967-1.jpg'
    },
    {
      pid: 4,
      pname: 'Top',
      pdescription: 'Women Black & Pink Striped Pullover',
      price: 1500,
      img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11951498/2020/10/27/f30343a1-dfea-4ef9-973c-9e34c14b942f1603790202658-DressBerry-Women-Sweaters-7571603790201507-1.jpg'
    },
    {
      pid: 5,
      pname: 'Top',
      pdescription: 'Multicoloured Tropical Print Crepe Wrap Top',
      price: 900,
      img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17803818/2022/4/7/1328f750-ab01-409a-89d9-c447d01ea84f1649352068672ZNXClothingMulticolouredPrintCrepeWrapTop1.jpg'
    },
    {
      pid: 6,
      pname: 'Top',
      pdescription: 'Women Off-White Puff Sleeve Faux Fur Solid Sweatshirt',
      price: 1200,
      img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12737904/2020/10/19/7f550f4b-8a3d-4cac-bb53-6537161754711603103037956-SASSAFRAS-Women-Sweatshirts-1101603103036418-1.jpg'
    }
  ];

  public getTopsDetails(): any {
    const topsObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.tops);
      }, 1000);
    });
    return topsObservable;
  }
}