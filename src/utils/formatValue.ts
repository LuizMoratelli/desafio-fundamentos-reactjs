const formatValue = (value: number | string): string => {
  const convertedValue = Number(value);

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(convertedValue);
};

export default formatValue;
