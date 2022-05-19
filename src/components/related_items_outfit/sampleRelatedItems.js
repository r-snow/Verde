// https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631

const product = {
  id: 65631,
  campus: 'rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description:
    'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2022-03-29T15:08:08.445Z',
  updated_at: '2022-03-29T15:08:08.445Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ],
};

// https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/related

const relatedItemIds = [65632, 65633, 65638, 65637];

const relatedItems = [
  {
    id: 65632,
    campus: 'rfp',
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description:
      "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69.00',
    created_at: '2022-03-29T15:08:08.445Z',
    updated_at: '2022-03-29T15:08:08.445Z',
    features: [
      {
        feature: 'Lenses',
        value: 'Ultrasheen',
      },
      {
        feature: 'UV Protection',
        value: null,
      },
      {
        feature: 'Frames',
        value: 'LightCompose',
      },
    ],
  },
  {
    id: 65633,
    campus: 'rfp',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description:
      "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40.00',
    created_at: '2022-03-29T15:08:08.445Z',
    updated_at: '2022-03-29T15:08:08.445Z',
    features: [
      {
        feature: 'Fabric',
        value: '100% Cotton',
      },
      {
        feature: 'Cut',
        value: 'Skinny',
      },
    ],
  },
  {
    id: 65638,
    campus: 'rfp',
    name: 'YEasy 350',
    slogan: 'Just jumped over jumpman',
    description:
      'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    category: 'Kicks',
    default_price: '450.00',
    created_at: '2022-03-29T15:08:08.445Z',
    updated_at: '2022-03-29T15:08:08.445Z',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    id: 65637,
    campus: 'rfp',
    name: 'Blues Suede Shoes',
    slogan: '2019 Stanley Cup Limited Edition',
    description:
      'Touch down in the land of the Delta Blues in the middle of the pouring rain',
    category: 'Dress Shoes',
    default_price: '120.00',
    created_at: '2022-03-29T15:08:08.445Z',
    updated_at: '2022-03-29T15:08:08.445Z',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
];

export default relatedItems;
