const discountValues = {
  '20TLKOD': {
    name: '20 TL Üzeri %10',
    condition: (total) => total >= 20 && total < 50,
    action: (total) => total * 0.9,
    amount: '10',
  },
  '50TLKOD': {
    name: '50 TL Üzeri %15',
    condition: (total) => total >= 50,
    action: (total) => total * 0.85,
    amount: '15',
  },
};

export default discountValues;
